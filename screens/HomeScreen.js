import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/hopkinsLogo.png')}
            style={styles.welcomeImage}
          />
          <Text style={styles.welcomeText}>
            Covid-19 {"\n"} Critical Care Reference
          </Text>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Clinician')}
          >
            <Image 
              source={require('../assets/images/clinician.png')}
              style={styles.buttonIcon}
              />
            <Text style={styles.buttonText}>Clinician Pocket Reference</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Ventilation')}
          >
            <Text style={styles.buttonText}>Ventilation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('PPE')}
          >
            <Text style={styles.buttonText}>PPE Usage</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Resources')}
          >
            <Text style={styles.buttonText}>Resources</Text>
          </TouchableOpacity>  

          </View>
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
  welcomeText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 36,
    textAlign: 'center',
  },
  buttonContainer: {
  },
  buttonIcon:{
    width:20,
    height:20,
  },
  buttonStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:50,
    backgroundColor: '#f2f2f2',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS 
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonText: {
    fontSize: 20,
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
