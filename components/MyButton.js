
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MyButton(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[{ backgroundColor: props.color }, styles.buttonStyle]}
      onPress={() => {
        switch (props.content) {
          case "CPRContent":
            navigation.navigate("CPRContent", {
              name: props.name,
              data: props.data,
            });
            break;
          case "Buttonscreen":
            navigation.navigate("Buttonscreen", {
              name: props.name,
              data: props.data,
              color: props.color,
              page: props.page,
              nextScreen: props.nextScreen,
            });
            break;
          case "Ventilator":
            navigation.navigate("Ventilator", {
              name: props.name,
              data: props.data,
            });
            break;
          case "Video Tutorial":
            navigation.navigate("Video Tutorial", {
              name: props.name,
              data: props.data,
            });
            break;
        }
      }}
    >
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 90,
    borderRadius: 20,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 1, // Android
    // fontFamily: "Avenir-roman",
    textAlign: "center",
  },
  buttonText: {
    paddingHorizontal: 20,
    // paddingTop: 10, //use with Avenir-roman only
    color: "black",
    fontSize: 24,
    // fontFamily: "Avenir-roman",
    textAlign: "center",
    lineHeight: 28,
  },
});