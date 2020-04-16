import React from 'react';
import { Image, Dimensions, StyleSheet, View, Modal } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';


let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;
export default function MyImage(props) {

  return (
    <View styles = {styles.container}>
      <ImageZoom cropWidth={windowWidth-50}
        cropHeight={windowHeight-50}
        imageWidth={windowWidth-50}
        imageHeight={windowHeight-50}>
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
  container:{
    flex:1,
    // width: 500,
    // height:300
    // justifyContent: 'center',
    // alignItems: 'center',
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
