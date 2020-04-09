import React, {Component} from 'react';
import Accordion from '../components/Accordion'

import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';

export default class TreatmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async getData() {
    const snapshot = await db.ref('cpr/Treatment').once('value');
    let data = snapshot.val();
    this.setState({ data });
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
              source={require('../assets/images/treatment.png')}
              style={styles.titleImage}
            />    
            <Text style={styles.titleText}>
            Treatment
            </Text>
          </View>
         {/* {this.state.information.map((prop, key) => {
           return (
             <Accordion title="hello" data="bitch please" key={key}>{prop[1]}></Accordion>
           );
        })} */}
        <Accordion title="Overall" data={this.state.data.Overall} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
        <Accordion title="Medications" data={this.state.data.Medications} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
        <Accordion title="Fluids Feeding Renal" data={this.state.data.FluidsFeedingRenal} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
        <Accordion title="Respiratory Care" data={this.state.data.RespiratoryCare} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
        <Accordion title="Intubation" data={this.state.data.Intubation} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
        <Accordion title="Cardiac" data={this.state.data.Cardiac} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
        <Accordion title="Discharge" data={this.state.data.Discharge} colorRow = "#E75351" colorChild = "#FFCECE"></Accordion>
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
    color: '#E75351',
  },
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
  },
});
