import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Dimensions, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { db } from "../config";
import { app } from "../config";
import { storageRef } from "../config";


//Log to local console for debugging
function consoleLog(name) {
	console.log(name);
}

var ventPicSrc; //source for vent picture
function fetchQRGuidePic	() { //fetch quick reference guide picture
  var imgPath = app.storage().ref('/images/QwikRefGuide/'); //google storage route
  var ventRef = imgPath.child(name.split(' ').join('_') + "_Quick_Guide.png");//add name of ventilator
  ventRef.getDownloadURL().then(function(url) {
  ventPicSrc = url;

  //debugging
  consoleLog('linked ventPic');
  consoleLog(ventPicSrc);
});}


export default function Ventilator({route}) {
  const { name } = route.params;
  const { data } = route.params;

  //log info for debugging to console
  consoleLog(name);
  consoleLog(route);

  fetchQRGuidePic();

  return (
    <View style = {styles.container}>
        <ScrollView>
          <Text style={styles.titleText}> {name + " Quick Reference Guide"} </Text>

          <Image
            style={{ width: 400, height: 400, alignSelf: 'center', margin: 10, transform: [{ scale: 1 }]}}
              source={require("../assets/images/" + name.split(' ').join('_') + "_Quick_Guide.png")}
          />

            <Text style={styles.subtitleText}></Text>
            <Text style={styles.subtitleText}>Tutorial Video</Text>
            <Video
              source={{ uri: 'https://www.youtube.com/watch?v=zjlS9sScfRk' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              useNativeControls={true}
              style={{ width: 350, height: 197 , alignSelf: 'center'}}
            />
        </ScrollView>
    </View>
  );
}

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
