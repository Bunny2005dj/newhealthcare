import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const navigation = useNavigation(); // ✅ Correct placement inside the component

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFB6C1', '#FFF0F5', '#E6E6FA', '#D8BFD8']} // Gradient colors
      style={styles.background}
    >

      <View style={styles.container}>
        <Text style={styles.title}>Admin Login</Text>

        {/* ✅ Corrected placeholders */}
      <TextInput style={styles.input} placeholder="Enter Email" />
      <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} />
        <TouchableOpacity 
  style={styles.button} 
  onPress={() => navigation.navigate('shoptimings')} // Replace with your actual screen name
>
  <Text style={styles.buttonText}>Sign In</Text>
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
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    
    
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    
  },
  header1: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    alignSelf: "flex-end"
  },
});

export default SignUpScreen;
