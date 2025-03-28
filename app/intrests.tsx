import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {  TextInput} from "react-native";

const interestsList = [
    { id: 1, name: "Drug Allergies" },
    { id: 2, name: "Food Allergies" },
    { id: 3, name: "Diabetes" },
    { id: 4, name: "Hypertension" },
    { id: 5, name: "Heart Disease" },
    { id: 6, name: "Liver Disease" },
    { id: 7, name: "Kidney Disease" },
    { id: 8, name: "Asthma" },
    { id: 9, name: "Pregnancy" },
    { id: 10, name: "Mental Health Conditions" },
    { id: 11, name: "Gastrointestinal Issues" },
    { id: 12, name: "Thyroid Disorders" },
    { id: 13, name: "Epilepsy" },
    { id: 14, name: "Cancer" },
  ];

const InterestsScreen = () => {
  const navigation = useNavigation();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else if (selectedInterests.length < 14) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#FFB6C1", "#FFF0F5", "#E6E6FA", "#D8BFD8"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Medical Conditions</Text>
        <Text style={styles.subtitle}>Select up to 3 medical conditions that apply to you to ensure safe and appropriate care.</Text>

        <FlatList
          data={interestsList}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.interestButton, selectedInterests.includes(item.name) && styles.selectedButton]}
              onPress={() => toggleInterest(item.name)}
            >
              <Text style={[styles.interestText, selectedInterests.includes(item.name) && styles.selectedText]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.title1}>Other Medical Conditions</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Here" 
        />
      </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText} >
                    {' '}Submit
                  </Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginTop:20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom:10,
  },
  title1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom:10,
    alignSelf:"center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
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
  button: {
    width: "80%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    alignSelf:'center',
    marginBottom:80,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  interestButton: {
    flex: 1,
    padding: 12,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFB6C1", // Light Pink Border
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom:6,
  },
  selectedButton: {
    backgroundColor: "#FFB6C1", // Light Pink when selected
  },
  interestText: {
    fontSize: 16,
    color: "#000",
  },
  selectedText: {
    color: "#fff", // White text when selected
    fontWeight: "bold",
  },
  skipButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#FF69B4", // Hot Pink for better visibility
    fontWeight: "bold",
  },
});

export default InterestsScreen;
