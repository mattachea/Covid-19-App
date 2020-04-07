import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ClinicianScreen({navigation}) {
  return (
  <View style={styles.container}>
  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.buttonStyle1}
            onPress={() => navigation.navigate('Epidemiology')}
          >
        <Text style={styles.buttonText}>Epidemiology</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() => navigation.navigate('Recognition')}
          >
            <Text style={styles.buttonText}>Recognition</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle3}
            onPress={() => navigation.navigate('Treatment')}
          >
            <Text style={styles.buttonText}>Treatment</Text>
          </TouchableOpacity>

  </View>
    </ScrollView>
      </View>
  );
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems:'center',
  },
  buttonIcon:{
    width:20,
    height:20,
  },
  buttonStyle1: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    width:350,
    height:100,
    backgroundColor: '#7ED551',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS 
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonStyle2: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    width:350,
    height:100,
    backgroundColor: '#EFCB34',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS 
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonStyle3: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    width:350,
    height:100,
    backgroundColor: '#E75351',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS 
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontSize: 24,
  },
  contentContainer: {
    paddingTop: 0,
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

