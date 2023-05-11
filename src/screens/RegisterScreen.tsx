import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Input from "@atoms/Input";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Input
        label="Email"
        placeholder="Type your email address"
        keyboardType="email-address"
      />

      <Input
        label="Username"
        placeholder="Type your username"
        keyboardType="default"
      />

      <Input
        label="Password"
        placeholder="Type your password"
        keyboardType="default"
        secureTextEntry
      />
      <Button title="Register" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
});
