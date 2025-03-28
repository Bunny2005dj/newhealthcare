import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [pincode, setPincode] = useState("");
  const [pregnancyStatus, setPregnancyStatus] = useState(null); // Stores 'yes' or 'no'

  return (
    <LinearGradient colors={["#FFFFFF", "#FFB6C1", "#FFF0F5", "#E6E6FA", "#D8BFD8"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Details</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Full Name" 
          value={name} 
          onChangeText={setName} 
        />

        <TextInput 
          style={styles.input} 
          placeholder="Age" 
          keyboardType="numeric" 
          value={age} 
          onChangeText={setAge} 
        />

        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setGender(itemValue);
              if (itemValue !== "female") setPregnancyStatus(null); // Reset if not Female
            }}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>



        {/* Pregnancy Status Section (Enabled only for Female) */}
        <Text style={styles.subTitle}>Pregnancy Status</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.pregnancyButton, pregnancyStatus === "yes" && styles.selectedButton, gender !== "female" && styles.disabledButton]} 
            onPress={() => gender === "female" && setPregnancyStatus("yes")}
            disabled={gender !== "female"}
          >
            <Text style={gender === "female" ? styles.buttonText : styles.disabledText}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.pregnancyButton, pregnancyStatus === "no" && styles.selectedButton, gender !== "female" && styles.disabledButton]} 
            onPress={() => gender === "female" && setPregnancyStatus("no")}
            disabled={gender !== "female"}
          >
            <Text style={gender === "female" ? styles.buttonText : styles.disabledText}>No</Text>
          </TouchableOpacity>
        </View>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Pincode" 
          keyboardType="numeric"
          value={pincode} 
          onChangeText={setPincode} 
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('intrests')}>
        <Text style={styles.buttonText} >
                    {' '}Submit
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 15,
  },
  pregnancyButton: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: "#007bff",
  },
  disabledButton: {
    backgroundColor: "#e0e0e0",
  },
  disabledText: {
    color: "#888",
    fontWeight: "bold",
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
  loginText: {
    color: "#000",
    marginTop: 10,
  },
  loginLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
