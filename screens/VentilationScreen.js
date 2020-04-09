import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default function VentilationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.titleContainer}>
    <Text style={styles.titleText}>
        Ventilator Model {"\n"} Reference
    </Text>
      <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Vent1')}
          >
            <Image 
              source={require('../assets/images/ltv1200.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>LTV1200</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Vent2')}
          >
            <Image 
              source={require('../assets/images/servou.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Servo-U</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Vent3')}
          >
            <Image 
              source={require('../assets/images/hamiltong5.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Hamilton G5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Vent4')}
          >
            <Image 
              source={require('../assets/images/PB.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Puritan Bennett</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  contentContainer: {
    paddingTop: 0,
  },
  buttonContainer: {
    alignItems:'center'
  },
  buttonIcon:{
    width:70,
    height:60,
    resizeMode: 'contain',
  },
  buttonStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    width:350,
    height:90,
    backgroundColor: '#f2f2f2',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS 
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonText: {
    fontSize: 24,
    paddingHorizontal: 20,
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
});