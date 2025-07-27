import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Form3Screen() {
  const [formData, setFormData] = useState({
    partNumber: '',
    partName: '',
    serialNumber: '',
    fairIdentifier: '',
  });

  const [characteristics, setCharacteristics] = useState([
    {
      number: '',
      location: '',
      accountability: '',
      requirement: '',
      result: '',
      tooling: '',
      nonConformance: '',
      comments: '',
    },
  ]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCharacteristicChange = (index, field, value) => {
    const updated = [...characteristics];
    updated[index][field] = value;
    setCharacteristics(updated);
  };

  const addCharacteristicRow = () => {
    setCharacteristics([
      ...characteristics,
      {
        number: '',
        location: '',
        accountability: '',
        requirement: '',
        result: '',
        tooling: '',
        nonConformance: '',
        comments: '',
      },
    ]);
  };

  const Field = ({ label, value, onChange }) => (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder=""
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Form 3</Text>

      {/* Basic Info */}
      <View style={styles.row}>
        <Field label="1. Part Number" value={formData.partNumber} onChange={(val) => handleChange('partNumber', val)} />
        <Field label="2. Part Name" value={formData.partName} onChange={(val) => handleChange('partName', val)} />
      </View>
      <View style={styles.row}>
        <Field label="3. Serial Number" value={formData.serialNumber} onChange={(val) => handleChange('serialNumber', val)} />
        <Field label="4. FAIR Identifier" value={formData.fairIdentifier} onChange={(val) => handleChange('fairIdentifier', val)} />
      </View>

      <Text style={styles.sectionTitle}>Characteristic Accountability, Verification, and Compatibility Evaluation</Text>

      {/* Dynamic Characteristic Rows */}
      {characteristics.map((char, index) => (
  <View key={index} style={styles.characteristicBlock}>
    <Text style={styles.subheading}>Characteristic Row {index + 1}</Text>

    {/* Characteristic Accountability Section */}
    <Text style={styles.sectionTitle}>Characteristic Accountability</Text>
    <View style={styles.row}>
      <Field
        label="5. Characteristic No."
        value={char.number}
        onChange={(val) => handleCharacteristicChange(index, 'number', val)}
      />
      <Field
        label="6. Reference Location"
        value={char.location}
        onChange={(val) => handleCharacteristicChange(index, 'location', val)}
      />
    </View>
    <Field
      label="7. Characteristic Accountability"
      value={char.accountability}
      onChange={(val) => handleCharacteristicChange(index, 'accountability', val)}
    />
    <Field
      label="8. Requirement"
      value={char.requirement}
      onChange={(val) => handleCharacteristicChange(index, 'requirement', val)}
    />

    {/* Inspection / Test Results Section */}
    <Text style={styles.sectionTitle}>Inspection / Test Results</Text>
    <Field
      label="9. Result"
      value={char.result}
      onChange={(val) => handleCharacteristicChange(index, 'result', val)}
    />
    <Field
      label="10. Designed / Qualified Tooling"
      value={char.tooling}
      onChange={(val) => handleCharacteristicChange(index, 'tooling', val)}
    />
    <Field
      label="11. Non-Conformance Number"
      value={char.nonConformance}
      onChange={(val) => handleCharacteristicChange(index, 'nonConformance', val)}
    />
    <Field
      label="12. Additional Data / Comments"
      value={char.comments}
      onChange={(val) => handleCharacteristicChange(index, 'comments', val)}
    />
  </View>
))}


      <TouchableOpacity onPress={addCharacteristicRow} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Characteristic Row</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c3a63',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c3a63',
    marginVertical: 12,
  },
  subheading: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  field: {
    flex: 1,
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#fff',
  },
  characteristicBlock: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#1c3a63',
  },
  
  addButton: {
    backgroundColor: '#1c3a63',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});



