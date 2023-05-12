import { View, Text, StyleSheet, Button } from "react-native";
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
      <Text>LoginScreen</Text>
      <Input
        label="Username"
        placeholder="Type your Username"
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
      <Button
        title="Login"
        onPress={() => {
          handleLogin();
        }}
      />
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account? Click{" "}
        <Text
          style={{ color: "#6E0301" }}
          onPress={() => navigation.navigate("Register")}
        >
          Here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
});
