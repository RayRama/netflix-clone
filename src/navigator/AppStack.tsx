import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contoh from "@screens/Contoh";
import DetailScreen from "@screens/DetailScreen";
import DownloadScreen from "@screens/DownloadScreen";
import GameScreen from "@screens/GameScreen";
import HomeScreen from "@screens/HomeScreen";
import LoginScreen from "@screens/LoginScreen";
import MovieScreen from "@screens/MovieScreen";
import NewsScreen from "@screens/NewsScreen";
import RegisterScreen from "@screens/RegisterScreen";
import UserScreen from "@screens/UserScreen";
import { NetflixUserAtom } from "@store/";
import { useAtom } from "jotai";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppStack() {
  const [dataUser] = useAtom(NetflixUserAtom);

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
          component={Contoh}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
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
            tabBarLabel: "Baru & Populer",
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
      {dataUser.loggedIn ? (
        <>
          <Stack.Screen
            name="BottomApp"
            component={BottomBar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Contoh"
            component={Contoh}
            options={{
              title: "Contoh",
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Netflix Clone",
            }}
          />
          <Stack.Screen
            name="DetailMedia"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieScreen"
            component={MovieScreen}
            options={({ route }) => ({ title: route.params.media.title })}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Login",
            }}
          />

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "Register",
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
