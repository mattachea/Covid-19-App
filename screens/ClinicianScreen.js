import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyButton from "../components/MyButton";
import { db } from "../config";

var colors = {
  'ECMO': "#C73110", //red
  'Cardiopulmonary_Arrest': "#C73110",
  'Cardiovascular_Support': "#C73110",
  'Hematology_and_Coagulation': "#C73110",
  'Epidemiology': "#EFCB34", //yellow
  'Pharmacological_Treatment': "#EFCB34",
  'Renal_Support': "#1082C7", //blue
  'Respiratory_Support': "#1082C7",
  'Airway_Management': "#1082C7",
  'Discharge': "#38B406", //green
  'Imaging': "#38B406",
  'Recognition': "#38B406",
};

export default function ClinicianScreen({ navigation }) {
  const [cprData, setData] = useState({});

  async function getData() {
    try {
      const snapshot = await db.ref("categories/").once("value");
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
    let cprDataArray = Object.entries(cprData);
    cprDataArray = [
      cprDataArray[5], cprDataArray[8], //yellow
      cprDataArray[6], cprDataArray[2], cprDataArray[1], cprDataArray[4], //red
      cprDataArray[0], cprDataArray[11], cprDataArray[10], //blue
      cprDataArray[7], cprDataArray[9], cprDataArray[3] //green
    ];
    cprDataArray.map(([key, value]) => {
      let name = key.replace(/_/g, " ");
      buttonList.push(
        <MyButton name={name} color={colors[key]} data={key} key={key} content = {false} />
      );
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
  },
  titleImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
