import { View, Text, Image, StyleSheet } from "react-native";
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
      <View style={styles.thumbnail}>
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
        {!premiumOnly && (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "red",
              padding: 5,
              borderTopLeftRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Free</Text>
          </View>
        )}
      </View>
      <View style={styles.movieDetails}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text>{`Genres: ${genre}`}</Text>
        <Text>{`Rating: ${rating}/10`}</Text>
        <Text>{`Type: ${type}`}</Text>
        {type === "Series" && <Text>{`Total Episode: ${totalEpisode}`}</Text>}
        <TouchableOpacity
          onPress={watchPress}
          style={{
            backgroundColor: "green",
            padding: 5,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 150,
    width: "100%",
    padding: 10,
    marginBottom: -10,
  },
  movieDetails: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
});
