import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function FormSelectorScreen({ navigation }) {
  const goToFormBuilder = (formType) => {
    navigation.navigate('FormBuilder', { formType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a Form Type</Text>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToFormBuilder('Form 1')}
        >
          <Text style={styles.buttonText}>Form 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => goToFormBuilder('Form 2')}
        >
          <Text style={styles.buttonText}>Form 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => goToFormBuilder('Form 3')}
        >
          <Text style={styles.buttonText}>Form 3</Text>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  button: {
    backgroundColor: '#1c3a63',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


