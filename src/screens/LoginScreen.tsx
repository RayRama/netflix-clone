import Input from "@atoms/Input";
import { AxiosClient } from "@helper/api/axios";
import { NetflixUser } from "@models/inheritance/NetflixUser";
import { SecureStorageService } from "@services/SecureStorageService";
import { AuthAtom, NetflixUserAtom, isLoadingAtom } from "@store/";
import * as SecureStore from "expo-secure-store";
import { useAtom } from "jotai";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dataUser, setDataUser] = useAtom(NetflixUserAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [auth, setAuth] = useAtom(AuthAtom);

  const axiosClient = new AxiosClient();
  const secureStorage = new SecureStorageService();

  const handleLogin = async () => {
    setIsLoading(true);
    const user = new NetflixUser();
    await user
      .login(username, password)
      .then((res) => {
        setDataUser({
          ...dataUser,
          username: res.data.username,
          email: res.data.email,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err?.response?.data);
        console.log(err);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    const loadToken = async () => {
      const token = await secureStorage.getItem("token");
      if (token) {
        axiosClient.setTokenHeader(token);
        setAuth({
          token: token,
          authenticated: true,
        });
      }
    };

    const loadDataUser = async () => {
      const user = await secureStorage.getItem("user");
      if (user) {
        setDataUser({ ...dataUser, ...JSON.parse(user) });
      }
    };
    loadDataUser();
    loadToken();
  }, []);

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
            Don't have an account?{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
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
