import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import CheckBox from "react-native-check-box";


export default class MyCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  render() {
    return (
      <View>
        <CheckBox
          style={{flex: 1, paddingLeft: this.props.offset}}
          rightText={this.props.data}
          rightTextStyle = {styles.text}

          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked,
            });
          }}
          isChecked={this.state.isChecked}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

