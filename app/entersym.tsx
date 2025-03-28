import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFB6C1', '#FFF0F5', '#E6E6FA', '#D8BFD8']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Enter Symptom Name (or) Medicine Name:</Text>

        {/* Label for Input Field */}
        <Text style={styles.inputLabel}>Write Something Here</Text>

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    fontSize: 18,  // Increased font size
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    height: 280,
    fontSize: 18,  // Increased text size inside the input
    textAlignVertical: 'top',  // Makes text start from the top
    marginBottom:20,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
