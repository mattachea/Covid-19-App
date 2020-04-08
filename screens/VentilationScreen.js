import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default function VentilationScreen({navigation}) {
  return (
    <View style={styles.ventilatorsItemContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.ventilatorsItemContainer}>
          <Image
            source={require('../assets/images/splash.png')}
            style={styles.ventilatorsPhoto}
          />
          <Text style={styles.ventilatorsName}>
            LTV-1200 Ventilator
          </Text>
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
  ventilatorsItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  ventilatorsPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  ventilatorsName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  ventilatorsInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});