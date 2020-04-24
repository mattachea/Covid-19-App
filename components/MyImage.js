import React from "react";
import { Dimensions, StyleSheet, View} from "react-native";
import ImageModal from "react-native-image-modal";

let windowWidth = Dimensions.get("window").width;
export default function MyImage(props) {
  return (
    <View styles={styles.container}>
      <ImageModal
        resizeMode="contain"
        imageBackgroundColor={props.backgroundColor}
        style={{
          width: windowWidth-50,
          height: 350,
        }}
        source={{
          uri:
            props.uri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});
