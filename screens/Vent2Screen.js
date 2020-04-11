import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';

export default function Vent2Screen({navigation}) {

  return (
    <View style = {styles.container}>
        <ScrollView>
          <Text style={styles.titleText}> Servo-U Quick Reference Guide</Text>
          <Image
            style={{ width: 200, height: 300, alignSelf: 'center', margin: 10, transform: [{ scale: 1 }]}}
            source={require('../assets/images/servou.png')}
          />

            <Text style={styles.subtitleText}></Text>
            <Text style={styles.subtitleText}>Tutorial Video</Text>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              useNativeControls={true}
              style={{ width: 350, height: 197 , alignSelf: 'center'}}
            />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  titleText: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 20,
    // padding: 15,
    paddingBottom: 20,
    alignSelf: 'center'
  },
});
