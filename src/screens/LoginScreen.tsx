import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import Input from "@atoms/Input";
import { NetflixUser } from "@models/inheritance/NetflixUser";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);

  const handleLogin = () => {
    if (
      dataUser.username == username &&
      dataUser.password == password &&
      username.length > 0 &&
      password.length > 0
    ) {
      const user = new NetflixUser(username, dataUser.email, password);
      setDataUser({
        ...dataUser,
        loggedIn: true,
      });
      user.login(password);
    } else {
      alert("Username or password not found");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginSection}>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Sign In
        </Text>
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
          onPress={() => handleLogin()}
          style={{
            backgroundColor: "#e50914",
            padding: 10,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
        </Pressable>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Belum punya akun? Klik{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Register")}
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
