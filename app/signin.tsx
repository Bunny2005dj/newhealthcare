import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
    const navigation = useNavigation(); 
  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFB6C1', '#FFF0F5', '#E6E6FA', '#D8BFD8']} // Gradient colors
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('otp')}>
        <Text style={styles.buttonText} >
                    {' '}Get OTP
                  </Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
                  Have an account?
                  <Text style={styles.loginLink} onPress={() => navigation.navigate('index')}>
                    {' '}Sign In
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
  title1: {
    // alignSelf: 'flex-start',
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
});

export default SignUpScreen;
