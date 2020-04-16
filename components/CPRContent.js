import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
// import CheckBox from "react-native-check-box";
import Accordion from "./Accordion";

export default function CPRContent({ route }) {
  const { name } = route.params;
  const { data } = route.params;

  //create list of objects using a switch statement on the type of component we want to render
  function createObjects() {
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

    let componentsList = [];
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
        case "url":
          componentsList.push(
            <View key={k++}>
              <RectButton
                style={styles.option}
                onPress={() => WebBrowser.openBrowserAsync(value.content.link)}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.optionIconContainer}>
                    <Ionicons
                      name="md-school"
                      size={22}
                      color="rgba(0,0,0,0.35)"
                    />
                  </View>
                  <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{value.content.title}</Text>
                  </View>
                </View>
              </RectButton>
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
