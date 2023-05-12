import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";

export default function DetailScreen({ route }) {
  const [dataUser] = useAtom(NetflixUserAtom);
  const { media } = route.params;
  return (
    <View style={styles.container}>
      <Text>{media.getTitle()}</Text>
      <Button title="Play" onPress={() => media.play(dataUser)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
});
