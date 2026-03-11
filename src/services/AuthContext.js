import React, { createContext, useState, useEffect } from 'react';
import usersData from "../../assets/users.json";
//import CryptoJS from "crypto-js";
import bcrypt from "bcryptjs";
import RNFS from "react-native-fs";

export const AuthContext = createContext();
const SESSION_FILE = RNFS.DocumentDirectoryPath + "/session.json";

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    loadSession();
  },[]);

  const loadSession = async () => {
    try{
      const exists = await RNFS.exists(SESSION_FILE);

      if(exists){
        const data = await RNFS.readFile(SESSION_FILE);
        const session = JSON.parse(data);
        setUser(session.user);
      }

    }catch(e){
      console.log("Session load error",e);
    }

    setLoading(false);
  };

  const saveSession = async(user)=>{
    await RNFS.writeFile(
      SESSION_FILE,
      JSON.stringify({user}),
      "utf8"
    );
  };

  const clearSession = async()=>{
    const exists = await RNFS.exists(SESSION_FILE);
    if(exists) await RNFS.unlink(SESSION_FILE);
  };

  const login = async(username,password)=>{

    const found = usersData.users.find(
      u => u.username === username
    );
    console.log("USERS:", usersData);
    console.log("####### password: ",password , " pass hash: ", found.password," username: ", username);

    if(found){

      const match = bcrypt.compareSync(password, found.password);
      
      if(match){
        setUser(found);
        return true;
      }

  }

    return false;
  };

  const logout = async()=>{
    setUser(null);
    await clearSession();
  };

  return(
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};