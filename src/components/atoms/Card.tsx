import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Card({ children, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 90,
    marginRight: 5,
    marginLeft: 5,
    height: 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
