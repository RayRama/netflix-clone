import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PremiereMedia({ image, genre, playPress, infoPress }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: image,
        }}
        imageStyle={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        style={styles.imageBackground}
      >
        <View
          style={{
            alignSelf: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={styles.genre}>
            {genre?.split(",").map((text, index) => {
              return (
                <>
                  <Text style={styles.genreText}>{text}</Text>
                  <Text style={styles.divider}>
                    {index !== genre?.split(",").length - 1 ? "•" : ""}
                  </Text>
                </>
              );
            })}
          </View>
          <View style={styles.bottom}>
            {/* Daftar Saya */}
            <TouchableOpacity
              style={styles.botomIcon}
              activeOpacity={0.6}
              onPress={() => alert("Sedang dalam pengembangan")}
            >
              <Ionicons name="add" size={24} color="white" />
              <Text style={styles.bottomText}>Daftar Saya</Text>
            </TouchableOpacity>

            {/* Play */}
            <TouchableOpacity
              style={styles.play}
              activeOpacity={0.6}
              onPress={playPress}
            >
              <Ionicons name="play" size={24} color="black" />
              <Text style={styles.playTitle}>Putar</Text>
            </TouchableOpacity>
            {/* Info */}
            <TouchableOpacity
              style={styles.botomIcon}
              activeOpacity={0.6}
              onPress={infoPress}
            >
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="white"
              />
              <Text style={styles.bottomText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
  },
  imageBackground: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  genre: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  genreText: {
    color: "white",
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  divider: {
    color: "gray",
    fontSize: 20,
  },
  bottom: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-evenly",
  },
  botomIcon: {
    flexDirection: "column",
    alignItems: "center",
    width: 80,
  },
  bottomText: {
    color: "white",
    fontSize: 12,
  },
  play: {
    width: 100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  playTitle: {
    color: "black",
    fontSize: 12,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
