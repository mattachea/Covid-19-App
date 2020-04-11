import React, {Component} from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';
import { data } from '../App';



export default class TreatmentScreen extends Component {
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

        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={[{backgroundColor: '#7ED551'}, styles.buttonStyle]}
            onPress={() => this.props.navigation.navigate('DiseaseAgent')}
          
          >
        <Text style={styles.buttonText}>Disease Agent</Text>
        </TouchableOpacity>

   
        <TouchableOpacity
            style={[{backgroundColor: '#7ED551'}, styles.buttonStyle]}
            onPress={() => this.props.navigation.navigate('Transmission')}
          >
        <Text style={styles.buttonText}>Transmission</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={[{backgroundColor: '#7ED551'}, styles.buttonStyle]}
            onPress={() => this.props.navigation.navigate('R0')}
          >
        <Text style={styles.buttonText}>R0</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[{backgroundColor: '#7ED551'}, styles.buttonStyle]}
            onPress={() => this.props.navigation.navigate('CaseFatality')}
          >
        <Text style={styles.buttonText}>Case Fatality</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
            style={[{backgroundColor: '#7ED551'}, styles.buttonStyle]}
            onPress={() => this.props.navigation.navigate('RiskFactors')}
          >
        <Text style={styles.buttonText}>Risk Factors for Severity</Text>
        </TouchableOpacity>
        
        </View>

</View>
  </ScrollView>
    </View>
   )
}
}
//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  titleText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 36,
    textAlign: 'center',
  },
  titleImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems:'center',
  },
  buttonIcon:{
    width:50,
    height:50,
    resizeMode: 'contain',
  },
  buttonStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    width:350,
    height:90,
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS 
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonText: {
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 24,
  },
  contentContainer: {
    paddingTop: 0,
  },
});