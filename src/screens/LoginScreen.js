import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import { AuthContext } from '../services/AuthContext';


export default function LoginScreen({ navigation }) {
  const insets = useSafeAreaInsets();  
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async()=>{

    const ok = await  login(username,password);

    if(!ok){
      Alert.alert("Errore","Credenziali non valide");
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top } ]} >
      <Text style={styles.title}>Accesso Verbalia</Text>  
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity
          onPress={()=>setShowPassword(!showPassword)}
          style={{marginLeft:10}}
        >
          <Text style={styles.eye}>
            {showPassword ? "Nascondi" : "Mostra"}
          </Text>
        </TouchableOpacity>
       </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Accedi</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Accesso Verbalia</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    gap: 5
  },
   title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    height: theme.input.height,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    fontSize: 16,
    color: theme.colors.text
  },

  passwordContainer:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#ddd",
    marginBottom:20
  },


  inputFocused: {
    borderColor: theme.colors.primary,
    borderWidth: 2
  },

   passwordInput:{
    flex:1,
    padding:15
  },

  eye:{
    fontSize:12,
    paddingHorizontal:15,
    color: theme.colors.primary
  },

  button: {
    height: 50,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },

  buttonDanger: {
    backgroundColor: '#DC2626',
  }
});