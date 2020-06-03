import * as React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyVideo from "../components/MyVideoForVent";
import MyImage from "../components/MyImage";

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
          let uri = "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FQwikRefGuide%2F" +
            value.content +
            "?alt=media&token=1cdcded1-d887-412e-b632-62a4dc92b3bc";
          componentsList.push(
            <View key={k++}>
              <MyImage uri={uri}/>
            </View>
          );
          break;
        case "video":
          let video = value.content.video;
          let timestamps = value.content.timestamps;
          componentsList.push(
            <View key={k++}>
              <MyVideo video={video} timestamps={timestamps}/>
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <View style={styles.contentContainer}>{createObjects()}</View>
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
    backgroundColor: "#fff",
    height:'100%'
  },
  titleContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleText: {
    fontSize: 36,
    textAlign: "center",
    // fontFamily: "Avenir-roman",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  contentContainer: {
    // margin: 3.5,
    height: "100%",
  },
});
