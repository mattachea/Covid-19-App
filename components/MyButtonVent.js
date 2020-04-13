import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MyButtonVent(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[{ backgroundColor: props.color }, styles.buttonStyle]}
      onPress={() => {
            navigation.navigate('Ventilator', {
                name: props.name,
                data: props.data,
            });

        }
      }
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
  },
  buttonText: {
    paddingHorizontal: 20,
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Avenir-roman",
    textAlign: "center",
    lineHeight: 28,
  },
});
