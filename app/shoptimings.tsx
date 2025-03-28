import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const ShopTimingScreen = () => {
  const navigation = useNavigation();
  const [timings, setTimings] = useState({
    weekdaysOpen: new Date(),
    weekdaysClose: new Date(),
    saturdayOpen: new Date(),
    saturdayClose: new Date(),
    sundayOpen: new Date(),
    sundayClose: new Date(),
  });

  const [showPicker, setShowPicker] = useState({ field: null, visible: false });

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTimings((prev) => ({
        ...prev,
        [showPicker.field]: selectedTime,
      }));
    }
    setShowPicker({ field: null, visible: false });
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#FFB6C1", "#FFF0F5", "#E6E6FA", "#D8BFD8"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Shop Timings</Text>

        {[
          { label: "Weekdays (Mon - Fri)", openKey: "weekdaysOpen", closeKey: "weekdaysClose" },
          { label: "Saturday", openKey: "saturdayOpen", closeKey: "saturdayClose" },
          { label: "Sunday", openKey: "sundayOpen", closeKey: "sundayClose" },
        ].map(({ label, openKey, closeKey }) => (
          <View style={styles.timeContainer} key={label}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.input}
                onPress={() => setShowPicker({ field: openKey, visible: true })}
              >
                <Text>{timings[openKey].toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Text>
              </TouchableOpacity>
              <Text style={styles.toText}>to</Text>
              <TouchableOpacity
                style={styles.input}
                onPress={() => setShowPicker({ field: closeKey, visible: true })}
              >
                <Text>{timings[closeKey].toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Submit Button */}
        <TouchableOpacity 
  style={styles.button} 
  onPress={() => navigation.navigate('adminswipe')} // Replace with your actual screen name
>
  <Text style={styles.buttonText}>Save Timings</Text>
</TouchableOpacity>


        {/* Time Picker */}
        {showPicker.visible && (
          <DateTimePicker
            value={timings[showPicker.field]}
            mode="time"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={handleTimeChange}
          />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  title: { alignSelf: "flex-start", fontSize: 28, fontWeight: "bold", color: "#000", marginBottom: 20 },
  timeContainer: { width: "100%", marginBottom: 15 },
  label: { fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 5 },
  row: { flexDirection: "row", alignItems: "center" },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  toText: { fontSize: 16, fontWeight: "bold", color: "#000" },
  button: { width: "100%", backgroundColor: "#007bff", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default ShopTimingScreen;
