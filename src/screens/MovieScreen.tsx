import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MediaPlayer from "@molecules/MediaPlayer";

export default function MovieScreen({ route }) {
  const { movie } = route.params;
  return (
    <View style={styles.main}>
      <MediaPlayer />
      <View style={styles.movieDetail}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieDescription}>{movie.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  movieDetail: {
    flex: 1,
    padding: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  movieDescription: {
    fontSize: 16,
    color: "#000",
    textAlign: "justify",
  },
});
