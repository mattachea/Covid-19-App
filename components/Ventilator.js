import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Dimensions, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { db } from "../config";
import { app } from "../config";
import { storageRef } from "../config";
//import YoutubePlayer from "react-native-yt-player";


//Log to local console for debugging
function consoleLog(name) {
	console.log(name);
}

var ventIds = {
  'Hamilton_C1': "#C73110",
  'Hamilton_C1': "#C73110",
  'Hamilton_C1': "#C73110",
  'Hamilton_C1': "#C73110",
};

var ventPicSrc; //source for vent picture

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

export default function Ventilator({route}) {
  const { name } = route.params;
  const { data } = route.params;
  /*state = {
    fullScreen: false
  };

  onFullScreen = fullScreen => {
    console.log("fullscreen ", fullScreen);
    this.setState({ fullScreen });
  };*/
  const namePath = (name.split(' ').join('_') + "_Quick_Guide.png");

  //log info for debugging to console
  consoleLog(name);
  consoleLog(route);
  consoleLog(namePath);

  fetchQRGuidePic(namePath);

  /*						<center>
						<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zjlS9sScfRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>*/
            
  /* 
            <Video
              source={{ uri: 'https://www.youtube.com/watch?v=zjlS9sScfRk' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              useNativeControls={true}
              style={{ width: 350, height: 197 , alignSelf: 'center'}}
            />*/

  /*            <View style={{ paddingTop: 60 }}>
              <YoutubePlayer
                topBar={TopBar}
                videoId="sf9t3q3FdUM"
                autoPlay
                onFullScreen={this.onFullScreen}
                onStart={() => console.log("onStart")}
                onEnd={() => alert("on End")}
              />
            </View>*/

//source={{uri: ventPicSrc}} -->proper method of doing this but issues due to async
//source={require("../assets/images/" + name.split(' ').join('_') + "_Quick_Guide.png")}
  return (
    <View style = {styles.container}>
        <ScrollView>
          <Text style={styles.titleText}> {name + " Quick Reference Guide"} </Text>

          <Image
            style={{ width: 400, height: 400, alignSelf: 'center', margin: 10, transform: [{ scale: 1 }]}}
            source={{uri: "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FQwikRefGuide%2F"+namePath+"?alt=media&token=1cdcded1-d887-412e-b632-62a4dc92b3bc"}}

          />

            <Text style={styles.subtitleText}></Text>
            <Text style={styles.subtitleText}>Tutorial Video</Text>
        </ScrollView>
    </View>
  );
}


function fetchQRGuidePic (namePath) { //fetch quick reference guide picture
  var imgPath = app.storage().ref("/images/QwikRefGuide/"); //google storage route
  var ventRef = imgPath.child(namePath);//add name of ventilator
  ventRef.getDownloadURL().then(function(url) {
  ventPicSrc = url;

  //debugging
  consoleLog('linked ventPic');
  consoleLog(ventPicSrc);
});}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  titleText: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 20,
    // padding: 15,
    paddingBottom: 20,
    alignSelf: 'center'
  },
});
