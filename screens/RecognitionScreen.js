import React, {Component} from 'react';
import Accordion from '../components/Accordion'

import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';


export default class RecognitionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async getData() {
    const snapshot = await db.ref('cpr/recognition').once('value');
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
              source={require('../assets/images/recognition.png')}
              style={styles.titleImage}
            />    
            <Text style={styles.titleText}>
            Recognition
            </Text>
          </View>

        <Accordion title="Diagnosis" data={this.state.data.Diagnosis} colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        <Accordion title="Laboratory" data={this.state.data.Laboratory} colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        <Accordion title="Microbiology" data={this.state.data.Microbiology} colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        <Accordion title="Imaging" data={this.state.data.Imaging} colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
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
    color: '#EFCB34',
  },
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
  },
});
