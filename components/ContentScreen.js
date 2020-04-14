import React, {useEffect, useState }  from "react";
import {StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function ContentScreen({ route }) {
  const { name } = route.params;
  const { data } = route.params;

  function createObjects() {
    var objectsList = [];

    var indices = [];
    for(var i=0; i<data.length;i++) {
      if (data[i] === "$") indices.push(i);
    }

    if (indices.length == 0) {

      let textObject = <Text key = '1' style = {styles.text}>{data}</Text>;
      objectsList.push(textObject);

    } else {

      let firstText = data.substring(0, indices[0]);
      let firstObject = <Text key = '1' style = {styles.text}>{firstText}</Text>;
      objectsList.push(firstObject);

      for (let i = 0; i < indices.length; i = i + 2) {
        let imageName = data.substring(indices[i]+1, indices[i+1]);
        let text = data.substring(indices[i+1]+1, indices[i+2]);

        let imageObject = <Image
        style={{ width: 400, height: 400, alignSelf: 'center', margin: 10, transform: [{ scale: 1 }]}}
        source={{uri: "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FCPRImages%2F"+imageName+"?alt=media&token=9b535aac-9275-4cfa-b4f3-552010ab594b"}}/>;
        
        objectsList.push(imageObject);

        let textObject = <Text key = {i} style = {styles.text}>{text}</Text>;
        objectsList.push(textObject);
        
      }

    }
    return objectsList;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {name}
          </Text>
          {createObjects()}
        </View>
      </ScrollView>
    </View>
  );

  function fetchCPRImage (namePath) { //fetch any images on this page
    var imgPath = app.storage().ref("/images/CPRImages/"); //google storage route
    var ventRef = imgPath.child(namePath);//add name of image file
    ventRef.getDownloadURL().then(function(url) {
    return url;
  });}
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    padding: 20
  },
  titleText: {
    marginBottom: 30,
    fontSize: 36,
    textAlign: "center",
    fontFamily:"Avenir-roman",
  },
  titleImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  text: {
      fontSize: 18,
      fontFamily:"Avenir-roman",

  }
});
