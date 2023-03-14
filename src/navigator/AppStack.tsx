import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";
import MovieScreen from "@screens/MovieScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
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
        options={({ route }) => ({ title: route.params.movie.title })}
      />
    </Stack.Navigator>
  );
}
