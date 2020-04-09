import React, {Component} from 'react';
import Accordion from '../components/Accordion'

import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';


export default class EpidemiologyScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async getDesc() {
    const snapshot = await db.ref('ventilators').once('value');
    let data = snapshot.val();
    this.setState({ data });
  }

  render() {
    this.getDesc();
    const desc = this.state.data;
    const desc2 = desc["Hamilton G-5"];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            
            <Image 
              source={require('../assets/images/epidemiology.png')}
              style={styles.titleImage}
            />    
            <Text style={styles.titleText}>
            Epidemiology
            </Text>
          </View>

        <Accordion title="Disease Agent" data={JSON.stringify(desc2["photo_url"])} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Transmission" data={JSON.stringify(this.state.data)} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="R0" data="= number of new cases from a single infection
= 2.24-3.58 [2]" colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Case Fatality" data="Overall CF ratio (death/confirmed infections) = 4.5%
(current number) [3]
CF rate of >80 age group = 14.8%[4]
Case fatality ratio of “critically ill” 49%[4]" colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Risk Factors for Severity" data="Old age, Coronary Artery Disease, Hypertension,
Diabetes, Chronic Respiratory Disease [4,5]" colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        </ScrollView>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: '#ffff',

  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor:'#ffff',
  },
  titleText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 36,
    fontWeight:'bold',
    textAlign: 'center',
    color: '#7ED551',
  },
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
  },
});