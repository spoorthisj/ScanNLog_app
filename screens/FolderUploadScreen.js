import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export default function FolderUploadScreen({ navigation }) {
  const [files, setFiles] = useState([]);

  const pickFiles = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf'],
        multiple: true,
        copyToCacheDirectory: false,
      });

      if (!result.canceled) {
        const selectedFiles = result.assets || [result];
        setFiles((prev) => [...prev, ...selectedFiles]);
      }
    } catch (error) {
      console.error('Error picking files:', error);
    }
  };

  const goToFormSelector = () => {
    navigation.navigate('FormSelector');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Uploaded PDFs</Text>

      {files.length === 0 ? (
        <Text style={styles.emptyText}>No files uploaded</Text>
      ) : (
        <FlatList
          data={files}
          keyExtractor={(item, index) => item.uri + index}
          renderItem={({ item }) => (
            <View style={styles.fileItem}>
              <Ionicons name="document-text-outline" size={20} color="#333" />
              <Text style={styles.fileName}>{item.name}</Text>
            </View>
          )}
        />
      )}

      {/* + Button */}
      <TouchableOpacity style={styles.fab} onPress={pickFiles}>
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>

      {/* Continue Button */}
      {files.length > 0 && (
        <TouchableOpacity style={styles.continueBtn} onPress={goToFormSelector}>
          <Text style={styles.continueText}>Continue to Form</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbff',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef0f5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  fileName: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 24,
    backgroundColor: '#007bff',
    borderRadius: 30,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  continueBtn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});