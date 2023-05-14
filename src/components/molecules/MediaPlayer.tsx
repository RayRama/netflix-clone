import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function MediaPlayer() {
  return (
    <View>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.COVER,
          source: {
            uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
          },
        }}
        style={{
          height: 250,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 8,
        }}
      >
        <Text style={{ color: "white", marginRight: 8 }}>Preview</Text>
      </View>
    </View>
  );
}
