import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Form2SetupScreen({ navigation }) {
  const [rows, setRows] = useState([{ columns: '' }]);
  const [showTooltip, setShowTooltip] = useState(false);

  const addRow = () => {
    setRows([...rows, { columns: '' }]);
  };

  const handleColumnChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].columns = value;
    setRows(updatedRows);
  };

  const generateForm = () => {
    const columnStructure = rows.map(row => parseInt(row.columns) || 0);
    navigation.navigate('FormBuilder', {
      formName: 'Form 2',
      columnStructure,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Setup for Form 2</Text>
        <Pressable onPress={() => setShowTooltip(!showTooltip)}>
          <Ionicons name="information-circle-outline" size={26} color="#1c3a63" />
        </Pressable>
      </View>

      {showTooltip && (
        <View style={styles.tooltipContainer}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipTitle}>🛠 Form 2 – Product Accountability</Text>
            <Text style={styles.tooltipText}>
              Lists materials, special processes, and specifications used in manufacturing the part.
            </Text>
            <Text style={styles.tooltipNote}>🧾 “What materials/processes were used?”</Text>
          </View>
          <View style={styles.tooltipPointer} />
        </View>
      )}

      <FlatList
        data={rows}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.label}>Row {index + 1}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="No. of columns"
              value={item.columns}
              onChangeText={text => handleColumnChange(index, text)}
            />
          </View>
        )}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton} onPress={addRow}>
          <Text style={styles.buttonText}>+ Add Row</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createButton} onPress={generateForm}>
          <Text style={styles.buttonText}>Create Form</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fc',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c3a63',
    marginBottom: 20,
  },
  tooltipContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: -10,
  },
  tooltip: {
    backgroundColor: '#fffbea',
    borderColor: '#f4d700',
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 12,
    maxWidth: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  tooltipTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    color: '#1c3a63',
  },
  tooltipText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  tooltipNote: {
    fontStyle: 'italic',
    color: '#555',
    fontSize: 13,
  },
  tooltipPointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 12,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#f4d700',
    transform: [{ rotate: '180deg' }],
    marginLeft: 15,
    marginTop: -1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    width: 70,
    color: '#1c3a63',
    fontWeight: '600',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  addButton: {
    backgroundColor: '#1c3a63',
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: '#4185a3',
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});




