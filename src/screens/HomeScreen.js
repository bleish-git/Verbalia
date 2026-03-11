import React, { useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { AuthContext } from '../services/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';


export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={[styles.container, { paddingTop: insets.top } ]} >
      <Text>Ciao {user.name}</Text>
      <Text>Email: {user.email}</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
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
  },

  buttonDanger: {
    backgroundColor: '#DC2626',
  }
});