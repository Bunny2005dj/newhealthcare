import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"; // Import Image Picker

const images = [
  require("../assets/slider1.jpeg"),
  require("../assets/slider2.jpeg"),
  require("../assets/slider3.jpeg"),
];

const previouslyRequested = [1, 2, 3, 4, 5, 6, 7, 8]; 
const pendingRequests = [1, 2, 3, 4, 5]; 

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      scrollViewRef.current?.scrollTo({ x: currentIndex * 385, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to open the camera
  const pickImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to grant camera permissions to take a picture.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#FFB6C1", "#FFF0F5", "#E6E6FA", "#D8BFD8"]} style={styles.background}>
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#000" />
        <Text style={styles.username}>Hi, User Name</Text>
        <Ionicons name="person-circle-outline" size={35} color="#000" />
      </View>

      <ScrollView horizontal pagingEnabled ref={scrollViewRef} showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.carouselImage} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Previously Requested</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.flatList}>
        {previouslyRequested.map((item, index) => (
          <View key={index} style={styles.circle} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Pending Requests</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.flatList}>
        {pendingRequests.map((item, index) => (
          <View key={index} style={styles.circle} />
        ))}
      </ScrollView>

      {/* Add Image Button */}
      

      <View style={styles.header}>
      <Ionicons style={{ borderWidth: 2, borderColor: "#000", borderRadius: 10 }} name="menu" size={28} color="#000" />
        <TouchableOpacity style={styles.addButton} onPress={pickImageFromCamera}>
        <Ionicons name="camera" size={30} color="#fff" />
        <Text style={styles.addText}>Add Image</Text>
      </TouchableOpacity>
   
    <TouchableOpacity 
        style={{ padding: 10, borderRadius: 5 }} 
        onPress={() => navigation.navigate('entersym')}
    >
        <Ionicons name="add" size={30} color="#000" />
    </TouchableOpacity>


      </View>

      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  carousel: {
    marginVertical: 20,
    height: 150,
    marginTop: 30,
  },
  carouselImage: {
    width: 380,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
    marginTop: 10,
  },
  flatList: {
    flexDirection: "row",
    paddingLeft: 20,
    marginVertical: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFB6C1",
    marginRight: 10,
  },
  addButton: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  addText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default HomeScreen;
