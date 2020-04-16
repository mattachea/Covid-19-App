import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import Vimeo from "react-native-vimeo";

export default function MyVideo(props) {
  /*state = {
    fullScreen: false
  };*/
  //onFullScreen={fullScreen => {this.setState({ fullScreen });}}

  return (
    <View style={{ paddingTop: 60 }}>
      {/* <Vimeo
        ref='video'
        videoId={props.video} // Vimeo video ID
        onReady={ () => console.log('Video is ready') }
        onPlay={ () => console.log('Video is playing') }
        onPlayProgress={ data => console.log('Video progress data:', data) }
        onFinish={ () => console.log('Video is finished') }
      /> */}
    </View>
  );
}
