import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require('../assets/images/splash.png')}
            style={styles.titleImage}
          />
          <Text style={styles.titleText}>
            COVID-19 {"\n"}Pocket Reference
          </Text>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Clinician Pocket Reference')}
          >
            <Image
              source={require('../assets/images/clinician.png')}
              style={styles.buttonIcon}
              />
            <Text style={styles.buttonText}>Clinician Reference</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Ventilation')}
          >
            <Image
              source={require('../assets/images/ventilator.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Ventilation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('PPE')}
          >
            <Image
              source={require('../assets/images/PPE.png')}
              style={styles.buttonIcon}
              />
            <Text style={styles.buttonText}>PPE Usage</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Resources')}
          >
            <Ionicons
              name={"md-information-circle-outline"}
              size={30}
              style={styles.buttonIcon}
              style= {{marginLeft: 32}}
            />
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
  titleText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 36,
    textAlign: 'center',
  },
  buttonContainer: {
  },
  buttonIcon:{
    marginLeft: 25,
    width:40,
    height:40,
    resizeMode: 'contain',
  },
  buttonStyle: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'flex-start',
    width:300,
    height:70,
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
    marginLeft: 20,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  titleImage: {
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
