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

export default function Form3SetupScreen({ navigation }) {
  const [rows, setRows] = useState([{ columns: '' }]);
  const [showInfo, setShowInfo] = useState(false);

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
      formName: 'Form 3',
      columnStructure,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Setup for Form 3</Text>
        <Pressable onPress={() => setShowInfo(!showInfo)}>
          <Ionicons name="information-circle-outline" size={26} color="#1c3a63" />
        </Pressable>
      </View>

      {showInfo && (
        <View style={styles.infoBoxWrapper}>
          <View style={styles.pointer} />
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>📏 Form 3 – Characteristic Accountability</Text>
            <Text style={styles.infoDescription}>
              Documents actual measured values for each design characteristic on the drawing.
            </Text>
            <Text style={styles.question}>📐 “Does the part meet all drawing specs?”</Text>
          </View>
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
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c3a63',
  },
  infoBoxWrapper: {
    position: 'relative',
    marginBottom: 20,
    marginTop: 4,
    marginHorizontal: 5,
  },
  pointer: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff8dc',
    zIndex: 1,
    transform: [{ translateY: -10 }],
  },
  infoBox: {
    backgroundColor: '#fff8dc',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1c3a63',
    marginBottom: 6,
  },
  infoDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  question: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444',
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


