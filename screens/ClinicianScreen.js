import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function ClinicianScreen({navigation}) {
  return (
  <View style={styles.container}>
  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.titleContainer}>
    <Text style={styles.titleText}>
        Clinician {"\n"} Pocket Reference
    </Text>
    <Image 
      source={require('../assets/images/clinician.png')}
      style={styles.titleImage}
    />
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={[{backgroundColor: '#7ED551'}, styles.buttonStyle]}
            onPress={() => navigation.navigate('Epidemiology')}
          >
        <Image 
            source={require('../assets/images/epidemiology.png')}
            style={styles.buttonIcon}
        />    
        <Text style={styles.buttonText}>Epidemiology</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[{backgroundColor: '#EFCB34'}, styles.buttonStyle]}
            onPress={() => navigation.navigate('Recognition')}
          >
            <Image 
              source={require('../assets/images/recognition.png')}
              style={styles.buttonIcon}
            />    
            <Text style={styles.buttonText}>Recognition</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{backgroundColor: '#E75351'}, styles.buttonStyle]}
            onPress={() => navigation.navigate('Treatment')}
          > 
            <Image 
            source={require('../assets/images/treatment.png')}
            style={styles.buttonIcon}
            />    
            <Text style={styles.buttonText}>Treatment</Text>
          </TouchableOpacity>
      </View>    

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

