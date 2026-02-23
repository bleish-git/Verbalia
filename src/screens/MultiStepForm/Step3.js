import React from 'react';
import { View, Button } from 'react-native';
import { generateMultiPDF } from '../../utils/pdfGenerator';

export default function Step3({ route }) {
  const { nome, cognome } = route.params;

  const handleFinish = async () => {
    await generateMultiPDF({ nome, cognome });
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Genera PDF Finale" onPress={handleFinish} />
    </View>
  );
}
