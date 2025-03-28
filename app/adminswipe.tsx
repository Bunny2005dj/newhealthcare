import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const initialPatientsData = [
  { id: 1, name: "John Doe", age: 35, gender: "Male", prescription: false },
  { id: 2, name: "Jane Smith", age: 28, gender: "Female", prescription: false },
  { id: 3, name: "Mark Johnson", age: 42, gender: "Male", prescription: false },
  { id: 4, name: "Emily Davis", age: 30, gender: "Female", prescription: false },
];

const AdminPatientRequests = () => {
  const [patients, setPatients] = useState(initialPatientsData);
  const [isCardsOver, setIsCardsOver] = useState(false);
  const swiperRef = useRef(null);

  // Toggle Prescription Button
  const togglePrescription = (patientId) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === patientId
          ? { ...patient, prescription: !patient.prescription }
          : patient
      )
    );
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#FFB6C1", "#FFF0F5", "#E6E6FA", "#D8BFD8"]}
      style={styles.background}
    >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={35} color="#000" />
        <Text style={styles.headerText}>Hi Admin</Text>
      </View>

      {/* Check if all cards are swiped */}
      {isCardsOver ? (
        <View style={styles.cardsOverContainer}>
          <Text style={styles.cardsOverText}>Cards Over</Text>
        </View>
      ) : (
        <View style={styles.swiperContainer}>
          <Swiper
            ref={swiperRef}
            cards={patients}
            renderCard={(patient) => (
              <View style={styles.card}>
                <Text style={styles.patientText}>
                  {patient.name}, {patient.age} yrs, {patient.gender}
                </Text>

                {/* Placeholder for image (Grey Box) */}
                <View style={styles.imagePlaceholder}>
                  <Text style={{ color: "#888" }}>Patient Image</Text>
                </View>

                {/* Rx Button (Toggle Prescription) */}
                <TouchableOpacity
                  style={[
                    styles.rxButton,
                    patient.prescription && styles.rxButtonSelected,
                  ]}
                  onPress={() => togglePrescription(patient.id)}
                >
                  <Text style={styles.rxText}>Rx</Text>
                </TouchableOpacity>
              </View>
            )}
            onSwipedLeft={(index) =>
              console.log("Rejected: ", patients[index]?.name)
            }
            onSwipedRight={(index) =>
              console.log("Accepted: ", patients[index]?.name)
            }
            onSwipedAll={() => setIsCardsOver(true)} // When all cards are swiped
            cardIndex={0}
            stackSize={4} // Increased stack size to show below cards
            stackScale={10} // Scale effect on below cards
            stackSeparation={15} // Space between cards
            backgroundColor="transparent"
          />
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  swiperContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 370,
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  patientText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 15,
  },
  rxButton: {
    backgroundColor: "#ccc",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
  },
  rxButtonSelected: {
    backgroundColor: "#FFA500", // Orange color when activated
  },
  rxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  cardsOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsOverText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default AdminPatientRequests;
