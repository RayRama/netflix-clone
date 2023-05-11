import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({ label, placeholder, ...props }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#020202",
  },
  input: {
    borderWidth: 1,
    borderColor: "#020202",
    borderRadius: 8,
    padding: 10,
  },
});
