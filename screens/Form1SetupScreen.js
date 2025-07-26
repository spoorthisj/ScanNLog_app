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
    faiReason: '',
    aog: false,
    faaApproved: false,
    partNumberComponent: '',
    partNameComponent: '',
    partType: '',
    supplier: '',
    fairIdentifier: '',
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

      {/* Section 1 */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Field label="1. Part Number" value={formData.partNumber} onChange={val => handleChange('partNumber', val)} />
          <Field label="2. Part Name" value={formData.partName} onChange={val => handleChange('partName', val)} />
        </View>
        <View style={styles.row}>
          <Field label="3. Serial Number" value={formData.serialNumber} onChange={val => handleChange('serialNumber', val)} />
          <Field label="4. FAIR Identifier" value={formData.fairId} onChange={val => handleChange('fairId', val)} />
        </View>
        <View style={styles.row}>
          <Field label="5. Part Revision Level" value={formData.partRevisionLevel} onChange={val => handleChange('partRevisionLevel', val)} />
          <Field label="6. Drawing Number" value={formData.drawingNumber} onChange={val => handleChange('drawingNumber', val)} />
        </View>
        <View style={styles.row}>
          <Field label="7. Drawing Rev Level" value={formData.drawingRevLevel} onChange={val => handleChange('drawingRevLevel', val)} />
          <Field label="8. Additional Changes" value={formData.additionalChanges} onChange={val => handleChange('additionalChanges', val)} />
        </View>
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <Field label="9. Manufacturing Process Reference" placeholder="Manufacturing Process Reference" value={formData.mfgProcessRef} onChange={val => handleChange('mfgProcessRef', val)} />
        <Field label="10. Organization Name" value={formData.orgName} onChange={val => handleChange('orgName', val)} />
        <View style={styles.row}>
          <Field label="11. Supplier Code" value={formData.supplierCode} onChange={val => handleChange('supplierCode', val)} />
          <Field label="12. PO Number" value={formData.purchaseOrder} onChange={val => handleChange('purchaseOrder', val)} />
        </View>
      </View>

      {/* Section 3: Detail / Assembly */}
      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
          <Text style={styles.checkboxLabel}>13.</Text>
          <Text style={styles.checkboxLabel}>Detail:</Text>
          <TouchableOpacity
            onPress={() => handleChange('detail', formData.detail === 'detail' ? '' : 'detail')}
            style={[styles.checkboxContainer, { marginLeft: 10, marginRight: 20 }]}
          >
            <Ionicons
              name={formData.detail === 'detail' ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Assembly:</Text>
          <TouchableOpacity
            onPress={() => handleChange('detail', formData.detail === 'assembly' ? '' : 'assembly')}
            style={styles.checkboxContainer}
          >
            <Ionicons
              name={formData.detail === 'assembly' ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
          </TouchableOpacity>
        </View>

        {/* Section 4: FAI Checkboxes */}
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <Text style={styles.checkboxLabel}>14.</Text>
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

        <Field label="Reason for Full/Partial FAI" value={formData.faiReason} onChange={val => handleChange('faiReason', val)} />

        {/* AOG / FAA */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
          <TouchableOpacity
            onPress={() => handleChange('aog', !formData.aog)}
            style={[styles.checkboxContainer, { marginRight: 20 }]}
          >
            <Ionicons
              name={formData.aog ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
            <Text style={styles.checkboxLabel}>AOG</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleChange('faaApproved', !formData.faaApproved)}
            style={styles.checkboxContainer}
          >
            <Ionicons
              name={formData.faaApproved ? 'checkbox' : 'square-outline'}
              size={24}
              color="#1c3a63"
            />
            <Text style={styles.checkboxLabel}>FAA Approved</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section 4: Component Index */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Index of Parts or Sub-Assemblies</Text>
        <Field label="15. Part Number" value={formData.partNumberComponent} onChange={val => handleChange('partNumberComponent', val)} />
        <Field label="16. Part Name" value={formData.partNameComponent} onChange={val => handleChange('partNameComponent', val)} />
        <Field label="17. Part Type" value={formData.partType} onChange={val => handleChange('partType', val)} />
        <Field label="Supplier" value={formData.supplier} onChange={val => handleChange('supplier', val)} />
        <Field label="18. FAIR Identifier" value={formData.fairIdentifier} onChange={val => handleChange('fairIdentifier', val)} />
      </View>
      <View style={styles.headerSection}>
  <Field label="FAIR #" value={formData.fairNumber} onChange={val => handleChange('fairNumber', val)} />
  <Field label="FAIR Status" value={formData.fairStatus} onChange={val => handleChange('fairStatus', val)} />
  <Field label="Program" value={formData.program} onChange={val => handleChange('program', val)} />
  <Field label="Customer" value={formData.customer} onChange={val => handleChange('customer', val)} />
  <Field label="Division Info" value={formData.divisionInfo} onChange={val => handleChange('divisionInfo', val)} />
</View>


      {/* Section 5: Nonconformance & Approval */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>19. Does FAIR Contain a Documented Nonconformance(s):</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => handleChange('nonConformance', true)}
          >
            <Ionicons
              name={formData.nonConformance ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#1c3a63"
            />
            <Text style={styles.radioLabel}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => handleChange('nonConformance', false)}
          >
            <Ionicons
              name={!formData.nonConformance ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#1c3a63"
            />
            <Text style={styles.radioLabel}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Verification and Comments */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Field label="20. FAIR Verified By" value={formData.fairVerifiedBy} onChange={val => handleChange('fairVerifiedBy', val)} />
          <Field label="21. Date" value={formData.dateVerified} onChange={val => handleChange('dateVerified', val)} />
        </View>
        <View style={styles.row}>
          <Field label="22. FAIR Reviewed/Approved By" value={formData.reviewedBy} onChange={val => handleChange('reviewedBy', val)} />
          <Field label="23. Date" value={formData.reviewedDate} onChange={val => handleChange('reviewedDate', val)} />
        </View>
        <View style={styles.row}>
          <Field label="24. Customer Approval" value={formData.approvedBy} onChange={val => handleChange('approvedBy', val)} />
          <Field label="25. Date" value={formData.approvedDate} onChange={val => handleChange('approvedDate', val)} />
        </View>
        <Field label="26. Comments" value={formData.comments} onChange={val => handleChange('comments', val)} />
      </View>
    </ScrollView>
  );
}

// ✅ Field Component
const Field = ({ label, value, onChange, placeholder }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder || label.replace(/^\d+\.\s*/, '')}
    />
  </View>
);

// ✅ Styles
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
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 8,
    marginBottom: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
});








