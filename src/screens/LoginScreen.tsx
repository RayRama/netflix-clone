import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Input from "@atoms/Input";
import { NetflixUser } from "@models/inheritance/NetflixUser";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);

  const handleLogin = () => {
    const user = new NetflixUser(username, "email", password);
    user.login(password);
    if (user.loggedIn) {
      setDataUser({
        ...dataUser,
        username,
        email: "email",
        password,
        isLogged: true,
      });
      navigation.navigate("BottomApp");
    } else {
      alert("Wrong password");
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
