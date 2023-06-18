import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "@screens/DetailScreen";
import DownloadScreen from "@screens/DownloadScreen";
import GameScreen from "@screens/GameScreen";
import HomeScreen from "@screens/HomeScreen";
import LoginScreen from "@screens/LoginScreen";
import NewsScreen from "@screens/NewsScreen";
import RegisterScreen from "@screens/RegisterScreen";
import UserScreen from "@screens/UserScreen";
import { NetflixUserAtom, AuthAtom } from "@store/";
import { useAtom } from "jotai";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import * as SecureStorage from "expo-secure-store";
import { useToken } from "@helper/hooks/useToken";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppStack() {
  const [dataUser] = useAtom(NetflixUserAtom);
  const [auth] = useAtom(AuthAtom);

  const BottomBar = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#221F1F",
            height: 60,
          },
          tabBarLabelStyle: {
            color: "white",
            marginBottom: 10,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
            headerTitleStyle: {
              display: "none",
            },
            headerLeft: () => (
              <Image
                source={require("@assets/images/logo.png")}
                style={{ width: 50, height: 50, marginLeft: 10 }}
              />
            ),
            headerRight: () => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => alert("Sedang dalam pengembangan")}
                >
                  <Ionicons
                    name="ios-search"
                    size={24}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                  <Image
                    source={{
                      uri: `https://ui-avatars.com/api/?name=${dataUser.username}&size=128&background=0D8ABC&color=fff`,
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 20,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        ></Tab.Screen>
        <Tab.Screen
          name="Game"
          component={GameScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-game-controller"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarLabel: "News & Popular",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-newspaper"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Download"
          component={DownloadScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-download"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      {auth.authenticated ? (
        <>
          <Stack.Screen
            name="BottomApp"
            component={BottomBar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="DetailMedia"
            component={DetailScreen}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#000000",
                color: "white",
              },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{
              title: "Profil & Lainnya",
              headerStyle: {
                backgroundColor: "#000000",
                color: "white",
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
