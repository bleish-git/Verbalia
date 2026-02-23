import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function Step1({ navigation }) {
  const [nome, setNome] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <Button title="Avanti"
        onPress={() => navigation.navigate('Step2', { nome })} />
    </View>
  );
}
