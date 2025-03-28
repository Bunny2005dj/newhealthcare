import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showError, setShowError] = useState(false); // State to show/hide error

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFB6C1', '#FFF0F5', '#E6E6FA', '#D8BFD8']} 
      style={styles.background}
    >
      <View style={styles.header1}>
        <Ionicons name="person-circle-outline" size={35} color="#000" />
        <TouchableOpacity onPress={() => navigation.navigate('admin')}>
          <Text style={styles.username}>Admin Login?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <TextInput style={styles.input} placeholder="Enter Email" />

        <View style={styles.passwordContainer}>
          <TextInput 
            style={styles.passwordInput} 
            placeholder="Enter Password" 
            secureTextEntry={!passwordVisible} 
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons 
              name={passwordVisible ? "eye-off" : "eye"} 
              size={24} 
              color="gray" 
              style={styles.eyeIcon} 
            />
          </TouchableOpacity>
        </View>

        {/* Show error message if showError is true */}
        {showError && <Text style={styles.errorText}>Your email or password is incorrect.</Text>}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* TEMPORARY BUTTON to simulate incorrect password */}
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'red', marginTop: 5 }]} 
          onPress={() => setShowError(true)}
        >
          <Text style={styles.buttonText}>Show Error</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Don't have an account?  
          <Text style={styles.loginLink} onPress={() => navigation.navigate('signin')}>
            {' '}Sign up
          </Text>
        </Text>
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
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    alignSelf: 'flex-start',
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
  loginText: {
    color: '#000',
    marginTop: 10,
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  header1: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    alignSelf: "flex-end"
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});

export default SignUpScreen;
