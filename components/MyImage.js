import React from "react";
import { Image, Dimensions, StyleSheet, View, Platform } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import ImageModal from "react-native-image-modal";
import { Props } from "react-native-image-pan-zoom/built/image-zoom/image-zoom.type";

let windowHeight = Dimensions.get("window").height;
let windowWidth = Dimensions.get("window").width;
export default function MyImage(props) {
  return Platform.OS == "web" ? webImage(props) : appImage(props);
}

function webImage(props) {
  return (
    <View styles={styles.container}>
      <ImageZoom
        cropWidth={windowWidth - 50}
        cropHeight={windowHeight - 50}
        imageWidth={windowWidth - 50}
        imageHeight={windowHeight - 50}
      >
        <Image
          style={styles.image}
          source={{
            uri: props.uri,
          }}
        />
      </ImageZoom>
    </View>
  );
}

function appImage(props) {
  return (
    <View styles={styles.container}>
      <ImageModal
        resizeMode="contain"
        imageBackgroundColor={props.backgroundColor}
        style={{
          width: windowWidth - 50,
          height: 350,
        }}
        source={{
          uri: props.uri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    // width: windowWidth,
    // height: undefined,
    // aspectRatio: 1,
    // margin: 20,
    // alignItems: 'center',
    resizeMode: "contain",
  },
});
