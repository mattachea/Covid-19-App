import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-yt-player";

const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: "center",
      position: "absolute",
      top: 0
    }}
  >
    {!fullScreen && <Text style={{ color: "#FFF" }}> Custom Top bar</Text>}
  </View>
);

export default class App extends Component<Props> {
  state = {
    fullScreen: false
  };

  onFullScreen = fullScreen => {
    console.log("fullscreen ", fullScreen);
    this.setState({ fullScreen });
  };
  render() {
    return (
      <View style={{ paddingTop: 60 }}>
        <YoutubePlayer
          topBar={TopBar}
          videoId="Z1LmpiIGYNs"
          autoPlay
          onFullScreen={this.onFullScreen}
          onStart={() => console.log("onStart")}
          onEnd={() => alert("on End")}
        />
      </View>
    );
  }
}
