import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";
import MediaPlayer from "@molecules/MediaPlayer";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 90,
      }}
    >
      <MediaPlayer />

      <View style={styles.titleSection}>
        <Text style={styles.titleText}>{media.getTitle()}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>{media.getYear()}</Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="yellow" />
          <Text
            style={{
              color: "gray",
              marginLeft: 4,
            }}
          >
            {media.getRating()}
          </Text>
        </View>
        <Text style={styles.infoText}>
          {media.seasons == null
            ? formatDuration(media.getDuration())
            : `${formatDuration(media.duration)} per episode`}
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <Pressable
          onPress={() => media.play(dataUser)}
          style={styles.playButton}
        >
          <Ionicons name="play" size={24} color="black" />
          <Text style={styles.playText}>Play</Text>
        </Pressable>
        <Pressable
          onPress={() => media.download(dataUser)}
          style={styles.downloadButton}
        >
          <Feather name="download" size={24} color="white" />
          <Text style={styles.downloadText}>Download</Text>
        </Pressable>
      </View>
      {/* <Button title="Play" onPress={() => media.play(dataUser)} />
      <Button title="Download" onPress={() => media.play(dataUser)} /> */}
      <View style={styles.mediaDetail}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis tincidunt nulla, et cursus diam semper ut. Nunc accumsan
          eget nunc ut rutrum. Cras dapibus lacus velit, vel aliquam leo pretium
          vel.
        </Text>
        <Text style={styles.detailText}>Genre: {media.getGenre()}</Text>
        <Text style={styles.detailText}>
          Cast:{" "}
          {media.getCast().map((name, index) => {
            if (index === media.getCast().length - 1) return name;
            return name + ", ";
          })}
        </Text>
        <Text style={styles.detailText}>Sutradara: {media.getDirector()}</Text>
      </View>
      <View style={styles.tools}>
        <View style={styles.addButton}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.toolsText}>Daftar Saya</Text>
        </View>
        <View style={styles.addButton}>
          <AntDesign name="like2" size={24} color="white" />
          <Text style={styles.toolsText}>Nilai</Text>
        </View>
        <View style={styles.addButton}>
          <Ionicons name="share-social" size={24} color="white" />
          <Text style={styles.toolsText}>Bagikan</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  titleSection: {
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  info: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  infoText: {
    marginRight: 10,
    color: "gray",
  },
  rating: {
    flexDirection: "row",
    marginRight: 10,
  },
  buttonSection: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
  },
  playButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  downloadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212121",
    padding: 10,
    borderRadius: 5,
  },
  playText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  downloadText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#fff",
  },
  mediaDetail: {
    padding: 10,
  },
  description: {
    color: "#fff",
    marginBottom: 10,
  },
  detailText: {
    color: "gray",
    marginBottom: 10,
  },
  tools: {
    flexDirection: "row",
    gap: 50,
    padding: 10,
  },
  toolsText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
