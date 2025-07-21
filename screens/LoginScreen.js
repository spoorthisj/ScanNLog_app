import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('FormSelector'); // You can replace with your next screen
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back! Glad to see you, Again!</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.or}>Or login with</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>🍎</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register')}
        >
          Register Now
        </Text>
      </Text>
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
    or: {
      textAlign: 'center',
      marginTop: 16,
      fontSize: 14,
      color: '#888',
    },
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 12,
    },
    socialBtn: {
      width: 40,
      height: 40,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      marginHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    footerText: {
      textAlign: 'center',
      marginTop: 24,
      fontSize: 14,
      color: '#444',
    },
    registerLink: {
      color: '#1c3a63',
      fontWeight: '600',
    },
  });
  