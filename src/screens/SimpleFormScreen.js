import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { generateSimplePDF } from '../utils/pdfGenerator';

export default function SimpleFormScreen() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');

  const handleSubmit = async () => {
    await generateSimplePDF({ nome, cognome });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <TextInput placeholder="Cognome" onChangeText={setCognome} />
      <Button title="Genera PDF" onPress={handleSubmit} />
    </View>
  );
}
