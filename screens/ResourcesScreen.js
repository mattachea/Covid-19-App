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
        icon="md-link"
        label="Hospital Epidemiology and Infection Control (HEIC) Intranet"
        onPress={() => WebBrowser.openBrowserAsync('https://www.hopkinsmedicine.org/heic/')}
      />
      <OptionButton
        icon="md-link"
        label="Center for Disease Control and Prevention"
        onPress={() => WebBrowser.openBrowserAsync('https://www.cdc.gov/')}
        isLastOption
      />

      <OptionButton
        icon="md-link"
        label="Hopkins Training Journal Clubs"
        onPress={() => WebBrowser.openBrowserAsync('http://anesthesiology.hopkinsmedicine.org/adult-critical-care/adult-critical-care-fellowship/covid-journal-clubs/')}
        isLastOption
      />

      <OptionButton
        icon="md-link"
        label="Hopkins COVID-ED"
        onPress={() => WebBrowser.openBrowserAsync('https://livejohnshopkins.sharepoint.com/sites/COVID-ED/SitePages/ICU-IMC-Training-%26-Resources.aspx')}
        isLastOption
      />

      <OptionButton
        icon="md-link"
        label="Coronavirus Resources Center"
        onPress={() => WebBrowser.openBrowserAsync('https://coronavirus.jhu.edu/')}
        isLastOption
      />

      <OptionButton
        icon="md-link"
        label="ICU Training for Non-ICU Physicians"
        onPress={() => WebBrowser.openBrowserAsync('https://covid19.sccm.org/')}
        isLastOption
      />
    <Text style={styles.subtitleText}>Feedback</Text> 
    <OptionButton
        icon="md-list"
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
    fontWeight: 'bold',
    // fontFamily: 'Avenir-roman'
  },
  subtitleText: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    // fontFamily: 'Avenir-roman'
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
    paddingHorizontal: 5,
    //fontFamily: 'Avenir-roman'
  },
});