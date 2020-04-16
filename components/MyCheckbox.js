import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

export default class MyCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      checked: false,
    };
  }
  render() {
    return (
      <View>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked,
            });
          }}
          isChecked={this.state.isChecked}
          leftText={"data"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
  },
});
