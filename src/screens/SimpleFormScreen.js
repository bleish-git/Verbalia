import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { generateSimplePDF } from '../utils/pdfGenerator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';



export default function SimpleFormScreen() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [focused, setFocused] = useState(null);
  const insets = useSafeAreaInsets();


  const handleSubmit = async () => {
    await generateSimplePDF({ nome, cognome });
  };

  return (<View
      style={[
        styles.container,
        { paddingTop: insets.top }
      ]}
    >
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={[
          styles.input,
          focused === 'nome' && styles.inputFocused
        ]}
        placeholderTextColor={theme.colors.muted}
        onFocus={() => setFocused('nome')}
        onBlur={() => setFocused(null)}
      />

      <TextInput
        placeholder="Cognome"
        value={cognome}
        onChangeText={setCognome}
        style={[
          styles.input,
          focused === 'cognome' && styles.inputFocused
        ]}
        placeholderTextColor={theme.colors.muted}
        onFocus={() => setFocused('cognome')}
        onBlur={() => setFocused(null)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Genera PDF</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background
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

  inputFocused: {
    borderColor: theme.colors.primary,
    borderWidth: 2
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
  }
});