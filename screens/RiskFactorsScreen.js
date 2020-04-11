import React, {Component} from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Dimensions, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { db } from '../config';
import { data } from '../App';
import Accordion from '../components/Accordion'

export default class RiskFactorsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  async getData() {
    try {
      const snapshot = await db.ref('cpr/epi').once('value');
      // let data = JSON.stringify(snapshot.val())
      let data = snapshot.val()
      this.setState({data})
    } catch(e) {
      console.warn(e);
    }
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
        <View style = {styles.container}>
          <ScrollView>
            <Text style={styles.titleText}> Risk Factors for Severity</Text>
            <Text style={styles.subtitleText}>{this.state.data.risk}</Text>
          </ScrollView>
        </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  titleText: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 20,
    // padding: 15,
    paddingBottom: 20,
    alignSelf: 'center'
  },
});
