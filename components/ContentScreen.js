import React, {useEffect, useState }  from "react";
import {StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function ContentScreen({ route }) {
  const { name } = route.params;
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {name}
          </Text>
          <Text style = {styles.text}>
              {data}
          </Text>
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
    padding: 20
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
  text: {
      fontSize: 16,
  }
});