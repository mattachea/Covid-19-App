import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";
import {RectButton } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import MyImage from './MyImage';
import MyCheckbox from './MyCheckbox';

export default class Accordion extends Component {
  // Specifies the default values for props:
  static propTypes = {
    colorRow: PropTypes.string,
    colorChild: PropTypes.string,
  };
  static defaultProps = {
    colorRow: "#A9A9A9",
    colorChild: "#DCDCDC",
  };
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  render() {
    let componentsList = [];
    let k = 0;

    const bulletPoint = (value, padding) => {
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
    };
    function checkboxes(value, offset) {
      const list = value.content.split("#");
      list.map((item) => {
        componentsList.push(
          <View key={k++} style={{paddingTop: (offset == 0) ? 20 : 0}}>
            <MyCheckbox data={item} offset={offset}></MyCheckbox>
          </View>
        );
      });
    }
    function letters(value, offset) {
      const list = value.content.split("#");
      var unicode = 97;
      list.map((item) => {
        componentsList.push(
          <View key={k++} style={{ flexDirection: "row", paddingLeft: offset, paddingTop: (offset == 0) ? 20 : 0}}>
            <Text style={styles.text}>{String.fromCharCode(unicode) + "."}</Text>
            <Text style={[{ flex: 1, paddingLeft: 5 }, styles.text]}>
              {item}
            </Text>
          </View>
        );
        unicode = unicode + 1;
      });
    }
    function numbers(value, offset) {
      const list = value.content.split("#");
      var number = 1;
      list.map((item) => {
        componentsList.push(
          <View key={k++} style={{ flexDirection: "row", paddingLeft: offset, paddingTop: (offset == 0) ? 20 : 0}}>
            <Text style={styles.text}>{String(number) + "."}</Text>
            <Text style={[{ flex: 1, paddingLeft: 5 }, styles.text]}>
              {item}
            </Text>
          </View>
        );
        number = number + 1;
      });
    }

    function createObjects(data) {
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
            checkboxes(value, 0);
            break;
          case "subCheckbox":
            checkboxes(value, 20);
            break;
            case "image":
              let uri = "https://firebasestorage.googleapis.com/v0/b/covid-19-ventilator-training.appspot.com/o/images%2FCPRImages%2F" +
                value.content +
                "?alt=media&token=9b535aac-9275-4cfa-b4f3-552010ab594b";
              componentsList.push(
                <View key={k++} style={styles.contentContainer}>
                  <MyImage uri={uri} backgroundColor={'#00000'}/> 
                </View>
              );
              break;
          case "url":
            componentsList.push(
              <View key={k++}>
                <RectButton
                  style={styles.option}
                  onPress={() =>
                    WebBrowser.openBrowserAsync(value.content.link)
                  }
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
                      <Text style={styles.optionText}>
                        {value.content.title}
                      </Text>
                    </View>
                  </View>
                </RectButton>
              </View>
            );
            break;
          case "mainLetters":
            letters(value, 0);
            break;
          case "subLetters":
            letters(value, 20);
            break;
          case "mainNumbers":
            numbers(value, 0);
            break;
          case "subNumbers":
            numbers(value, 20);
            break;
        }
      });
      return componentsList;
    }
    return (
      <View>
        <TouchableOpacity
          style={[styles.row, { backgroundColor: this.props.colorRow }]}
          onPress={() => this.toggleExpand()}
        >
          <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
          <Icon
            name={
              this.state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
            }
            size={30}
            color={"#ffff"}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View
            style={[styles.child, { backgroundColor: this.props.colorChild }]}
          >
            {createObjects(this.state.data)}
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "#7ED551",
  },
  parentHr: {
    height: 1,
    color: "#7645",
    width: "100%",
  },
  child: {
    backgroundColor: "#bcf2a0",
    padding: 16,
  },
  text: {
    fontSize: 18,
    // fontFamily: "Avenir-roman",
  },
  contentContainer: {
    flex: 1,
    padding: 0,
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
