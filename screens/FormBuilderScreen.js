import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

export default function FormBuilderScreen({ navigation }) {
  const [formRows, setFormRows] = useState([{ id: 1, label: '', value: '' }]);

  const addRow = () => {
    const newId = formRows.length + 1;
    setFormRows([...formRows, { id: newId, label: '', value: '' }]);
  };

  const removeRow = (id) => {
    setFormRows(formRows.filter((row) => row.id !== id));
  };

  const handleLabelChange = (id, text) => {
    setFormRows(formRows.map((row) => (row.id === id ? { ...row, label: text } : row)));
  };

  const handleValueChange = (id, text) => {
    setFormRows(formRows.map((row) => (row.id === id ? { ...row, value: text } : row)));
  };

  const handleSave = () => {
    console.log('Form Data:', formRows);
    Alert.alert('Form saved', 'Form data has been captured.');
    navigation.navigate('Review', { formData: formRows });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Inspection Form</Text>

      <FlatList
        data={formRows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Label (e.g. Part No)"
              placeholderTextColor="#888"
              value={item.label}
              onChangeText={(text) => handleLabelChange(item.id, text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Value (e.g. 01234)"
              placeholderTextColor="#888"
              value={item.value}
              onChangeText={(text) => handleValueChange(item.id, text)}
            />
            <TouchableOpacity onPress={() => removeRow(item.id)}>
              <Text style={styles.remove}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={addRow}>
        <Text style={styles.addButtonText}>➕ Add Field</Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => Alert.alert('Coming Soon', 'Camera integration here')}
        >
          <Text style={styles.actionText}>📸 Capture Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => Alert.alert('Coming Soon', 'Voice-to-text here')}
        >
          <Text style={styles.actionText}>🎤 Voice Input</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>💾 Save & Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(72,79,139,0.05)',
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#1c1c1e',
      textAlign: 'center',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 12,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderRadius: 10,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 8,
    },
    remove: {
      fontSize: 20,
      color: 'red',
    },
    addButton: {
      backgroundColor: '#1c3a63',
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    buttons: {
      marginTop: 24,
      gap: 12,
    },
    actionButton: {
      backgroundColor: '#f0f0f0',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    actionText: {
      fontSize: 16,
      color: '#1c1c1e',
      fontWeight: '600',
    },
    saveButton: {
      backgroundColor: '#1c3a63',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    saveText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

  
