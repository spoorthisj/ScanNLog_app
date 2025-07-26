import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function FormBuilderScreen({ route }) {
  const { formName } = route.params || { formName: 'Form 1' };

  const [formData, setFormData] = useState({
    partNumber: '',
    partName: '',
    serialNumber: '',
    fairId: '',
    customerPartNumber: '',
    partRevisionLevel: '',
    drawingNumber: '',
    drawingRevLevel: '',
    additionalChanges: '',
    mfgProcessRef: '',
    orgName: '',
    supplierCode: '',
    purchaseOrder: '',
    detail: '',
    fullFAI: false,
    partialFAI: false,
    baselinePartNumber: '',
    faiReason: '',
    processChange: '',
    partList: '',
    nonConformance: false,
    fairVerifiedBy: '',
    dateVerified: '',
    reviewedBy: '',
    reviewedDate: '',
    approvedBy: '',
    approvedDate: '',
    comments: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{formName}</Text>

      {/* Section 1: Basic Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Identification</Text>
        <View style={styles.row}>
          <Field label="Part Number" value={formData.partNumber} onChange={val => handleChange('partNumber', val)} />
          <Field label="Part Name" value={formData.partName} onChange={val => handleChange('partName', val)} />
        </View>
        <View style={styles.row}>
          <Field label="Serial Number" value={formData.serialNumber} onChange={val => handleChange('serialNumber', val)} />
          <Field label="FAIR Identifier" value={formData.fairId} onChange={val => handleChange('fairId', val)} />
        </View>
        <View style={styles.row}>
          <Field label="Customer Part Number" value={formData.customerPartNumber} onChange={val => handleChange('customerPartNumber', val)} />
          <Field label="Part Revision Level" value={formData.partRevisionLevel} onChange={val => handleChange('partRevisionLevel', val)} />
        </View>
        <View style={styles.row}>
          <Field label="Drawing Number" value={formData.drawingNumber} onChange={val => handleChange('drawingNumber', val)} />
          <Field label="Drawing Rev Level" value={formData.drawingRevLevel} onChange={val => handleChange('drawingRevLevel', val)} />
        </View>
        <Field label="Additional Changes" value={formData.additionalChanges} onChange={val => handleChange('additionalChanges', val)} />
      </View>

      {/* Section 2: Organization */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Organization Details</Text>
        <Field label="Mfg Process Ref" value={formData.mfgProcessRef} onChange={val => handleChange('mfgProcessRef', val)} />
        <Field label="Organization Name" value={formData.orgName} onChange={val => handleChange('orgName', val)} />
        <View style={styles.row}>
          <Field label="Supplier Code" value={formData.supplierCode} onChange={val => handleChange('supplierCode', val)} />
          <Field label="PO Number" value={formData.purchaseOrder} onChange={val => handleChange('purchaseOrder', val)} />
        </View>
      </View>

      {/* Section 3: FAI */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. FAI Status</Text>
        <Field label="Detail" value={formData.detail} onChange={val => handleChange('detail', val)} />
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TouchableOpacity
            onPress={() => handleChange('fullFAI', !formData.fullFAI)}
            style={styles.checkboxContainer}
          >
            <Ionicons
              name={formData.fullFAI ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
            <Text style={styles.checkboxLabel}>Full FAI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleChange('partialFAI', !formData.partialFAI)}
            style={styles.checkboxContainer}
          >
            <Ionicons
              name={formData.partialFAI ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
            <Text style={styles.checkboxLabel}>Partial FAI</Text>
          </TouchableOpacity>
        </View>

        <Field label="Baseline Part Number" value={formData.baselinePartNumber} onChange={val => handleChange('baselinePartNumber', val)} />
        <Field label="Reason for FAI" value={formData.faiReason} onChange={val => handleChange('faiReason', val)} />
        <Field label="Process Change" value={formData.processChange} onChange={val => handleChange('processChange', val)} />
      </View>

      {/* Section 4: Index */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Index</Text>
        <Field label="Part List" value={formData.partList} onChange={val => handleChange('partList', val)} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
          <TouchableOpacity
            onPress={() => handleChange('nonConformance', !formData.nonConformance)}
            style={styles.checkboxContainer}
          >
            <Ionicons
              name={formData.nonConformance ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
            <Text style={styles.checkboxLabel}>Contains Documented Non-Conformance</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Section 5: Sign-Off */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Approval</Text>
        <View style={styles.row}>
          <Field label="Verified By" value={formData.fairVerifiedBy} onChange={val => handleChange('fairVerifiedBy', val)} />
          <Field label="Date" value={formData.dateVerified} onChange={val => handleChange('dateVerified', val)} />
        </View>
        <View style={styles.row}>
          <Field label="Reviewed By" value={formData.reviewedBy} onChange={val => handleChange('reviewedBy', val)} />
          <Field label="Date" value={formData.reviewedDate} onChange={val => handleChange('reviewedDate', val)} />
        </View>
        <View style={styles.row}>
          <Field label="Approved By" value={formData.approvedBy} onChange={val => handleChange('approvedBy', val)} />
          <Field label="Date" value={formData.approvedDate} onChange={val => handleChange('approvedDate', val)} />
        </View>
        <Field label="Comments" value={formData.comments} onChange={val => handleChange('comments', val)} />
      </View>
    </ScrollView>
  );
}

const Field = ({ label, value, onChange }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={label}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1c3a63',
  },
  section: {
    marginBottom: 24,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1c3a63',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
  
});

  

  
