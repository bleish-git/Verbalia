import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function Step2({ route, navigation }) {
  const { nome } = route.params;
  const [cognome, setCognome] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Cognome" onChangeText={setCognome} />
      <Button title="Avanti"
        onPress={() => navigation.navigate('Step3', { nome, cognome })} />
    </View>
  );
}
