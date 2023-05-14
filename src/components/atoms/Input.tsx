import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({ placeholder, ...props }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...props}
        placeholderTextColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 10,
    color: "white",
  },
});
