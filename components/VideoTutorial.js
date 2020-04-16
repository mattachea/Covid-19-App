import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Dimensions, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { db } from "../config";
import { app } from "../config";
import { storageRef } from "../config";
//import MyVideo from "../components/MyVideo";

var ventPicSrc; //source for vent picture

export default function VideoTutorial({route}) {
  const { name } = route.params;
  const { data } = route.params;
  return (
    <View style = {styles.container}>
        <ScrollView>
          <Text style={styles.titleText}> {name} </Text>
          <Text>{'Video Placeholder'}</Text>
        </ScrollView>
    </View>
  );
}


function fetchQRGuidePic (namePath) { //fetch quick reference guide picture
  var imgPath = app.storage().ref("/images/QwikRefGuide/"); //google storage route
  var ventRef = imgPath.child(namePath);//add name of ventilator
  ventRef.getDownloadURL().then(function(url) {
  ventPicSrc = url;
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
