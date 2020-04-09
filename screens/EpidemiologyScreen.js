import React, {Component} from 'react';
import Accordion from '../components/Accordion'

import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';
import { data } from '../App';



export default class EpidemiologyScreen extends Component {
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

        <Accordion title="Disease Agent" data={this.state.data.diseaseAgent} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Transmission" data={this.state.data.transmission} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="R0" data={this.state.data.r0} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Case Fatality" data={this.state.data.caseFatality} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Risk Factors for Severity" data={this.state.data.risk} colorRow = "#7ED551" colorChild = "#bcf2a0"></Accordion>
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