import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";

export default function DetailScreen({ route }) {
  const [dataUser] = useAtom(NetflixUserAtom);
  const { media } = route.params;

  const formatDuration = (duration: number) => {
    if (duration < 60) return `${duration}m`;
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text>{media.getTitle()}</Text>
      <Text>{media.getGenre()}</Text>
      <Text>{media.getRating()}</Text>
      <Text>
        {media.seasons == null
          ? formatDuration(media.getDuration())
          : `${formatDuration(media.duration)} per episode`}
      </Text>
      <Button title="Play" onPress={() => media.play(dataUser)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
});
