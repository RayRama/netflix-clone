import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contoh from "@screens/Contoh";
import HomeScreen from "@screens/HomeScreen";
import LoginScreen from "@screens/LoginScreen";
import MovieScreen from "@screens/MovieScreen";
import RegisterScreen from "@screens/RegisterScreen";
import UserScreen from "@screens/UserScreen";
import { useAtom } from "jotai";
import React from "react";
import { NetflixUserAtom } from "@store/";

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
          },
        }}
      >
        <Tab.Screen name="Home" component={Contoh}></Tab.Screen>
        <Tab.Screen name="UserProfile" component={UserScreen}></Tab.Screen>
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator>
      {!dataUser.loggedIn ? (
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
      ) : null}
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
        name="MovieScreen"
        component={MovieScreen}
        options={({ route }) => ({ title: route.params.media.title })}
      />
    </Stack.Navigator>
  );
}
