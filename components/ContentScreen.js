import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import CheckBox from "react-native-check-box";
import Accordion from "./Accordion";

export default function ContentScreen({ route }) {
  const { name } = route.params;
  const { data } = route.params;

  function createObjects() {
    // var objectsList = [];
    // var indices = [];
    // for(var i=0; i<data.length;i++) {
    //   if (data[i] === "$") indices.push(i);
    // }
    // if (indices.length == 0) {
    //   let textObject = <Text key = '1' style = {styles.text}>{data}</Text>;
    //   objectsList.push(textObject);
    // } else {
    //   let firstText = data.substring(0, indices[0]);
    //   let firstObject = <Text key = '1' style = {styles.text}>{firstText}</Text>;
    //   objectsList.push(firstObject);
    //   for (let i = 0; i < indices.length; i = i + 2) {
    //     let imageName = data.substring(indices[i]+1, indices[i+1]);
    //     let text = data.substring(indices[i+1]+1, indices[i+2]);
    //     let imageObject = <Image
    //     style={{width: 350, height: 350, alignSelf: 'center', margin: 10, resizeMode: 'contain'}}
    //     source={{uri: "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FCPRImages%2F"+imageName+"?alt=media&token=9b535aac-9275-4cfa-b4f3-552010ab594b"}}/>;
    //     objectsList.push(imageObject);
    //     let textObject = <Text key = {i} style = {styles.text}>{text}</Text>;
    //     objectsList.push(textObject);
    //   }
    // }
    // return objectsList;

    // code works but need to change database to the correct structure.
    let k = 0; //for unique keys to get rid of warnings

    function bulletPoint(value, padding) {
      const list = value.content.split("#");
      list.map((item) => {
        componentsList.push(
          <View
            key={k++}
            style={{ flexDirection: "row", paddingLeft: padding }}
          >
            <Text style={styles.text}>{"\u2022"}</Text>
            <Text style={[{ flex: 1, paddingLeft: 5 }, styles.text]}>
              {item}
            </Text>
          </View>
        );
      });
    }

    var componentsList = [];
    Object.entries(data).map(([key, value]) => {
      switch (value.type) {
        case "text":
          componentsList.push(
            <Text
              key={k++}
              style={[{ fontWeight: value.fontWeight }, styles.text]}
            >
              {value.content + "\n"}
            </Text>
          );
          break;
        case "mainBullet":
          bulletPoint(value, 0);
          break;
        case "subBullet":
          bulletPoint(value, 20);
          break;
        case "mainCheckbox":
          bulletPoint(value, 0); //need to actually implement checkboxes later
          break;
        case "subCheckbox":
          bulletPoint(value, 20); //need to actually implement checkboxes later
          break;
        case "image":
          componentsList.push(
            <View key={k++} style={styles.contentContainer}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FCPRImages%2F" +
                    value.content +
                    "?alt=media&token=9b535aac-9275-4cfa-b4f3-552010ab594b",
                }}
              />
            </View>
          );
          break;
        case "accordion":
          componentsList.push(
            <View key={k++} style={styles.contentContainer}>
              <Accordion title={value.title} data={value.content}></Accordion>
            </View>
          );
          break;
      }
    });
    return componentsList;
  }

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
});
