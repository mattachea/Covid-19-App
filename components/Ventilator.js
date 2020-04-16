import * as React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
//import MyVideo from "../components/MyVideo";

//var ventPicSrc; //source for vent picture

export default function Ventilator({route}) {
  const { name } = route.params;
  const { data } = route.params;

  //const namePath = (name.split(' ').join('_') + "_Quick_Guide.png");
  //fetchQRGuidePic(namePath);

  function createObjects() {
    let k = 0; //for unique keys to get rid of warnings

    let componentsList = [];
    Object.entries(data).map(([key, value]) => {
      switch (value.type) {
        case "image":
          componentsList.push(
            <View key={k++} style={styles.contentContainer}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FQwikRefGuide%2F" +
                    value.content +
                    "?alt=media&token=1cdcded1-d887-412e-b632-62a4dc92b3bc",
                }}
              />
            </View>
          );
          break;
        case "video":
          componentsList.push(
            <View key={k++} style={styles.contentContainer}>
              <Text>Video Placeholder</Text>
            </View>
          );
        break;
      }
    });
    return componentsList;
  }

  //source={{uri: ventPicSrc}} -->proper method of doing this but issues due to async
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <View style={styles.contentContainer}>{createObjects()}</View>
      </ScrollView>
    </View>
  );
}


/*function fetchQRGuidePic (namePath) { //fetch quick reference guide picture
  var imgPath = app.storage().ref("/images/QwikRefGuide/"); //google storage route
  var ventRef = imgPath.child(namePath);//add name of ventilator
  ventRef.getDownloadURL().then(function(url) {
  ventPicSrc = url;
});}*/

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    margin: 20,
  },
  titleText: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Avenir-roman",
  },
  subtitleText: {
    fontSize: 20,
    // padding: 15,
    paddingBottom: 20,
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    // fontFamily: "Avenir-roman",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
    paddingHorizontal: 15,
  },
});

