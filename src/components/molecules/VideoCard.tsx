import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Card from "../atoms/Card";
import { TouchableOpacity } from "react-native";

export default function videoCard({
  image,
  title,
  genre,
  rating,
  type,
  onPress,
  watchPress,
  premiumOnly,
  totalEpisode,
}) {
  return (
    <Card onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
