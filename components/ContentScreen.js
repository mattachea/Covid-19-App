import React, {useEffect, useState }  from "react";
import {StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function ContentScreen({ route }) {
  const { name } = route.params;
  const { data } = route.params;
  var array = data.match(/\$(.*?)\$/g);
  var namePaths = null;
  if (array !== null) {
    namePaths = findImageNames(array);
  }

  function createObjects() {
    var objectsList = [];
    if (namePaths !== null) {
      namePaths.forEach(namePath => {
        let text1 = data.split(namePath)[0];
        let text2 = data.split(namePath)[1];
        let textObject1 = <Text style = {styles.text}>{text1}</Text>;
        let textObject2 = <Text style = {styles.text}>{text2}</Text>;
        objectsList.push(textObject1);
        let imageObject = <Image
        style={{ width: 400, height: 400, alignSelf: 'center', margin: 10, transform: [{ scale: 1 }]}}
        source={{uri: "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FCPRImages%2F"+namePath+"?alt=media&token=9b535aac-9275-4cfa-b4f3-552010ab594b"}}/>;
        objectsList.push(imageObject);
        objectsList.push(textObject2);
      });
    } else {
      let textObject = <Text style = {styles.text}>{data}</Text>;
      objectsList.push(textObject);
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

  function findImageNames (array) {
    let imageNames = [];
    array.forEach(name => {
      let newName = name.replace('$', '');
      newName = newName.replace('$', '');
      console.log(newName);
      imageNames.push(newName);
      console.log(imageNames);
    });
    console.log(imageNames);
    return imageNames;
  }

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
    marginTop: 30,
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
      fontSize: 16,
  }
});
