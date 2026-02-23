import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Form Semplice"
        onPress={() => navigation.navigate('SimpleForm')} />
      <Button title="Form Multi-Step"
        onPress={() => navigation.navigate('Step1')} />
    </View>
  );
}
