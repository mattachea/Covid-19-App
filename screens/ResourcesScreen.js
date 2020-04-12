import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ResourcesScreen() {
  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <Text style={styles.titleText}>Resources</Text>   
    <Text style={styles.subtitleText}>Useful Links</Text>  
      <OptionButton
        icon="md-school"
        label="Hospital Epidemiology and Infection Control (HEIC) Intranet"
        onPress={() => WebBrowser.openBrowserAsync('https://www.hopkinsmedicine.org/heic/')}
      />
      <OptionButton
        icon="md-school"
        label="Center for Disease Control and Prevention"
        onPress={() => WebBrowser.openBrowserAsync('https://www.cdc.gov/')}
        isLastOption
      />

    <Text style={styles.subtitleText}>Feedback</Text> 
    <OptionButton
        icon="md-school"
        label="Comments or suggestions"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSeKC3seFS0pgsmH4vSkr8XCpzPq4VpmWTwzGGRDlL88krpy8g/viewform?usp=sf_link')}
        isLastOption
      />
    </ScrollView>

  )
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  titleText: {
    marginBottom: 30,
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtitleText: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
    paddingHorizontal: 15,
  },
});