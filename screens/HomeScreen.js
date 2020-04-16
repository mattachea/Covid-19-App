import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { db } from "../config";
import { data } from '../App';

export default function HomeScreen({navigation}) {

   // To get time from Firebase:
   const [timeData, setData] = useState({});

   async function getData() {
     try {
       const snapshot = await db.ref("Update_Time/").once("value");
       let data = snapshot.val();
       setData(data);
 
     console.log(data)
     } catch (e) {
       console.warn(e);
     }
   }
   useEffect(() => {
     getData();
   }, []);

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
            style={styles.buttonStyle1}
            onPress={() => navigation.navigate('Clinician Pocket Reference')}
          >
            <Image
              source={require('../assets/images/clinician.png')}
              style={styles.buttonIcon}
              />
            <Text style={styles.buttonText1}>Clinician Reference</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() => navigation.navigate('Ventilation')}
          >
            <Image
              source={require('../assets/images/ventilator.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText2}>Ventilation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle1}
            onPress={() => navigation.navigate('Tutorscreen')}
          >
            <Image
              source={require('../assets/images/PPE.png')}
              style={styles.buttonIcon}
              />
            <Text style={styles.buttonText1}>Video Tutorials</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() => navigation.navigate('Resources')}
          >
            <Ionicons
              name={"md-information-circle-outline"}
              size={30}
              style={styles.buttonIcon}
              style= {{marginLeft: 32}}
            />
            <Text style={styles.buttonText3}>Resources</Text>
          </TouchableOpacity>

            <View style={styles.contentContainer}>
            <Text styles={styles.titleText}>{timeData}</Text>
            
            </View>
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
    marginTop: 20,
    marginBottom: 10,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Avenir-roman',
  },
  buttonContainer: {
  },
  buttonIcon:{
    marginLeft: 25,
    width:40,
    height:40,
    resizeMode: 'contain',
  },
  buttonStyle1: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'flex-start',
    width:300,
    height:70,
    backgroundColor: '#1082C7',
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
    justifyContent:'flex-start',
    width:300,
    height:70,
    backgroundColor: '#EFCB34',
    borderRadius:20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 1, // Android
  },
  buttonText1: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'center',
    fontFamily: 'Avenir-roman',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  timeText: {
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 0,
    marginTop: 20,
  },
  buttonText2: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'center',
    fontFamily: 'Avenir-roman',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  buttonText3: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: 'Avenir-roman',
    paddingHorizontal: 20,
    paddingTop: 10,
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
