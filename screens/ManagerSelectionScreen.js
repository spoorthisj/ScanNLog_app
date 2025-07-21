import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ManagerSelectionScreen({ navigation }) {
  const [manager, setManager] = useState('');
  const [supervisor, setSupervisor] = useState('');

  const handleProceed = () => {
    if (manager && supervisor) {
      navigation.navigate('FormSelector');
    } else {
      alert('Please select both manager and supervisor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assign Manager & Supervisor</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Manager Name or Email"
          value={manager}
          onChangeText={setManager}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Supervisor Name or Email"
          value={supervisor}
          onChangeText={setSupervisor}
          style={styles.input}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleProceed}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1e',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  input: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1c3a63',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


