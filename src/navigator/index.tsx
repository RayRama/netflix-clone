import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
