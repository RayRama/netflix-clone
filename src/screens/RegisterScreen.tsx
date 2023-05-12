import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Input from "@atoms/Input";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);

  const registerHandle = () => {
    alert("Register success");
    setDataUser({
      ...dataUser,
      email,
      username,
      password,
    });
    // await AsyncStorage.setItem("user", JSON.stringify(dataUser));
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Input
        label="Email"
        placeholder="Type your email address"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />

      <Input
        label="Username"
        placeholder="Type your username"
        keyboardType="default"
        value={username}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize="none"
      />

      <Input
        label="Password"
        placeholder="Type your password"
        keyboardType="default"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
      />
      <Button title="Register" onPress={() => registerHandle()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
});
