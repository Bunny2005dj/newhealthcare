import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
const OTPScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef(Array(6).fill(null));

  const handleChange = (text, index) => {
    if (!text.match(/^\d?$/)) return;

    let newOtp = [...otp];
    newOtp[index] = text.charAt(0);
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#FFB6C1", "#FFF0F5", "#E6E6FA", "#D8BFD8"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>OTP</Text>
        <Text style={styles.subtitle}>Enter the 6-digit OTP sent to a*********@gmail.com</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputs.current[index] = ref;
              }}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')}>
        <Text style={styles.buttonText} >
                    {' '}Verify Otp
                  </Text>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    alignSelf: 'flex-start', 
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    marginLeft: 15,
  },
  subtitle: {
    alignSelf: 'flex-start', 
    textAlign:'left',
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
    marginLeft: 15,
   
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
    marginRight:8,
    marginLeft:-25,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    borderRadius: 8,
    marginRight:7,
  },
  button: {
    width: "80%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OTPScreen;
