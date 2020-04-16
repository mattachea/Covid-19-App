import React from 'react';
import { Image, Dimensions, StyleSheet, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function MyImage(props) {
  let cropHeight = Dimensions.get('window').height;
  let cropWidth = Dimensions.get('window').width;
  return (
    <View>
      <ImageZoom cropWidth={cropWidth}
        cropHeight={cropHeight}
        imageWidth={undefined}
        imageHeight={undefined}>

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
