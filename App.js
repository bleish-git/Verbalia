import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SimpleFormScreen from './src/screens/SimpleFormScreen';
import Step1 from './src/screens/MultiStepForm/Step1';
import Step2 from './src/screens/MultiStepForm/Step2';
import Step3 from './src/screens/MultiStepForm/Step3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SimpleForm" component={SimpleFormScreen} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
