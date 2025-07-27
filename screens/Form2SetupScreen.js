import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Form2Screen() {
  const [formData, setFormData] = useState({
    partNumber: '',
    partName: '',
    serialNumber: '',
    fairIdentifier: '',
    customerPartNumber: '',
    materialProcess: '',
    specNumber: '',
    code: '',
    supplier: '',
    customerApproval: '',
    certificateOfConformance: '',
    materials: '',
    referenceDoc: '',
    inspections: '', 
    functionalTestProc: '',
    acceptanceReportNum: '',
    comments: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const Field = ({ label, value, onChange }) => {
    const cleanedPlaceholder = label.replace(/^\d+\.\s*/, ''); // removes "1. ", "2. ", etc.
    return (
      <View style={styles.field}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={cleanedPlaceholder}
        />
      </View>
    );
  };
  

  return (
    <ScrollView style={styles.container}>
      {/* Header Info */}
      
      <Text style={styles.title}>Form 2</Text>


      {/* Part Info Section */}
      <View style={styles.row}>
        <Field label="1. Part Number" value={formData.partNumber} onChange={(val) => handleChange('partNumber', val)} />
        <Field label="2. Part Name" value={formData.partName} onChange={(val) => handleChange('partName', val)} />
      </View>
      <View style={styles.row}>
        <Field label="3. Serial Number" value={formData.serialNumber} onChange={(val) => handleChange('serialNumber', val)} />
        <Field label="4. FAIR Identifier" value={formData.fairIdentifier} onChange={(val) => handleChange('fairIdentifier', val)} />
      </View>
      

      {/* Materials / Processes */}
      <Text style={styles.sectionTitle}>Material/Processes – Rows 5 to 10</Text>
      <Field label="5. Material/Process Name" value={formData.materialProcess} onChange={(val) => handleChange('materialProcess', val)} />
      <Field label="6. Specification Number" value={formData.specNumber} onChange={(val) => handleChange('specNumber', val)} />
      <Field label="7. Code" value={formData.code} onChange={(val) => handleChange('code', val)} />
      <Field label="8. Supplier" value={formData.supplier} onChange={(val) => handleChange('supplier', val)} />
      <Field label="9. Customer Approval Verification" value={formData.customerApproval} onChange={(val) => handleChange('customerApproval', val)} />
      <Field label="10. Certificate of Conformance Number" value={formData.certificateOfConformance} onChange={(val) => handleChange('certificateOfConformance', val)} /> 
      <Field label="Materials" value={formData.materials} onChange={(val) => handleChange('materials', val)}/>


      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Conatils No Materials </Text>
  <Text style={styles.sectionTitle}>Processes</Text>

  {/* Row 1: Process Fields */}
  <Field label="FAIR #" value={formData.fairNumber} onChange={val => handleChange('fairNumber', val)} />
  <Field label="Process Name" value={formData.processName} onChange={val => handleChange('processName', val)} />
  <Field label="Specification Number" value={formData.specNumber} onChange={val => handleChange('specNumber', val)} />
  <Field label="Code" value={formData.processCode} onChange={val => handleChange('processCode', val)} />
  <Field label="Supplier Details" value={formData.supplierDetails} onChange={val => handleChange('supplierDetails', val)} />

  {/* Approval Yes/No */}
  <Text style={styles.label}>Customer Approval Verification:</Text>
  <View style={styles.radioGroup}>
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => handleChange('customerApproved', true)}
    >
      <Ionicons
        name={formData.customerApproved ? 'radio-button-on' : 'radio-button-off'}
        size={20}
        color="#1c3a63"
      />
      <Text style={styles.radioLabel}>Yes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => handleChange('customerApproved', false)}
    >
      <Ionicons
        name={!formData.customerApproved ? 'radio-button-on' : 'radio-button-off'}
        size={20}
        color="#1c3a63"
      />
      <Text style={styles.radioLabel}>No</Text>
    </TouchableOpacity>
  </View>

  <Field label="Certificate Number" value={formData.certificateNumber} onChange={val => handleChange('certificateNumber', val)} />
  <Field label="Reference Document" value={formData.referenceDocument} onChange={val => handleChange('referenceDocument', val)} />
</View>
<Field label="Inspections" value={formData.inspections} onChange={val => handleChange('inspections', val)} />



      {/* Functional Test & Comments */}
      <Field label="11. Functional Test Procedure Number" value={formData.functionalTestProc} onChange={(val) => handleChange('functionalTestProc', val)} />
      <Field label="12. Acceptance Report Number" value={formData.acceptanceReportNum} onChange={(val) => handleChange('acceptanceReportNum', val)} />
      <Field label="Reference Document" value={formData.referenceDocument} onChange={val => handleChange('referenceDocument', val)} />
      <Text style={styles.sectionTitle}>Contains No Functional Tests and Acceptance Reports </Text>
      <Field label="13. Comments" value={formData.comments} onChange={(val) => handleChange('comments', val)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  headerText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c3a63',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c3a63',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  field: {
    flex: 1,
    marginBottom: 12,
    marginRight: 10,
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 10,
    color: '#1c3a63',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, // optional spacing between Yes and No
    marginVertical: 8,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  
  noteText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginVertical: 4,
    color: '#888',
  },
});






