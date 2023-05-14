import { View, Text, StyleSheet, Button, Pressable } from "react-native";
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
    if (email.length < 1 || username.length < 1 || password.length < 1) {
      alert("Please fill all the fields");
      return;
    }
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
      <View style={styles.loginSection}>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Sign Up
        </Text>
        <Input
          placeholder="Email"
          keyboardType="default"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Username"
          keyboardType="default"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => registerHandle()}
          style={{
            backgroundColor: "#e50914",
            padding: 10,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Register</Text>
        </Pressable>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Sudah punya akun? Login{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
            onPress={() => navigation.pop()}
          >
            Disini
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212121",
  },
  loginSection: {
    width: "80%",
    height: "50%",
  },
});
