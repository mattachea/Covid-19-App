import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';


export default function Vent1Screen({navigation}) {
  return (
    <View style = {StyleSheet.container}>
        <Text style={styles.titleText}> LTV-1200</Text>

        <Image
          style={{ width: 100, height: 100, alignSelf: 'center', margin: 10}}
          source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
        />
        
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          useNativeControls={true}
          style={{ width: 350, height: 197 , alignSelf: 'center'}}
        />
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
    marginBottom: 10,
    fontSize: 24,
    textAlign: 'center',
  },
});
