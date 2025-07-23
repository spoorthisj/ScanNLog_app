import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ManagerSelectionScreen({ navigation }) {
  const [manager, setManager] = useState('');
  const [supervisor, setSupervisor] = useState('');

  const handleProceed = () => {
    if (manager && supervisor) {
      navigation.navigate('FormSelector');
    } else {
      alert('Please enter both ME-Engineer and QC-Engineer');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Assign Engineers</Text>
      <Text style={styles.subtitle}>Select ME-Engineer and QC-Engineer</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ME-Engineer</Text>
        <TextInput
          placeholder="Name or Email"
          placeholderTextColor="#aaa"
          value={manager}
          onChangeText={setManager}
          style={styles.input}
        />

        <Text style={styles.label}>QC-Engineer</Text>
        <TextInput
          placeholder="Name or Email"
          placeholderTextColor="#aaa"
          value={supervisor}
          onChangeText={setSupervisor}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleProceed}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1c3a63',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#1c3a63',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});



