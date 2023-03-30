import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function MediaPlayer() {
  return (
    <Fragment>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
          },
        }}
        style={{
          height: 300,
        }}
      />
    </Fragment>
  );
}
