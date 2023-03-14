import { View, Text } from "react-native";
import React from "react";

export default function MovieScreen({ route }) {
  const { movie } = route.params;
  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>{movie.description}</Text>
    </View>
  );
}
