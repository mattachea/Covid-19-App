import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyButtonVent from "./MyButtonVent";
import { db } from "../config";

var colors = ["#7ED551", "#EFCB34", "#E75351"];

export default function VentilationScreen({ navigation }) {
  const [cprData, setData] = useState({});

  async function getData() {
    try {
      const snapshot = await db.ref("Ventilator_Categories/").once("value");
      let data = snapshot.val();
      setData(data);

      // console.log(data)
    } catch (e) {
      console.warn(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  function createButtons() {
    let buttonList = [];
    let i = 0;
    Object.entries(cprData).map(([key, value]) => {
      let name = key.replace(/_/g, " ");
      buttonList.push(
        <MyButtonVent name={name} color={colors[i % 3]} data={key} key={key} />
      );
      i = i + 1;
    });
    return buttonList;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Ventilator Model {"\n"}Reference
          </Text>
          <Image
            source={require("../assets/images/ventilator.png")}
            style={styles.titleImage}
          />
          {createButtons()}
        </View>
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
    marginTop: 10,
    marginBottom: 20,
  },
  titleText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 36,
    textAlign: "center",
  },
  titleImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
