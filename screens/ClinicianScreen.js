import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyButton from "../components/MyButton";
import { db } from "../config";

export default function ClinicianScreen({ navigation }) {
  const [cprData, setData] = useState({});

  async function getData() {
    try {
      const snapshot = await db.ref("categories/").once("value");
      let data = snapshot.val();
      setData(data);
    } catch (e) {
      console.warn(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  function createButtons() {
    let buttonList = new Array(Object.keys(cprData).length);
    Object.entries(cprData).map(([key, value]) => {
      let name = key.replace(/_/g, " ");
      buttonList[value.order] =  
        <MyButton name={name} color={value.color} data={key} key={key} page={'cpr/'} nextScreen={'CPRContent'} content = 'Buttonscreen' />
      
    });
    return buttonList;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Clinician {"\n"} Pocket Reference
          </Text>
          <Image
            source={require("../assets/images/clinician.png")}
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
    // fontFamily: 'Avenir-roman',
  },
  titleImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
