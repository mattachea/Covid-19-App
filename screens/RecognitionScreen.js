import React, {Component} from 'react';
import Accordion from '../components/Accordion'

import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default class RecognitionScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     information :[
  //       { 
  //         title: 'Non Veg Biryanis', 
  //         data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
  //       },
  //       { 
  //         title: 'Pizzas',
  //         data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
  //       },
  //       { 
  //        title: 'Drinks',
  //        data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
  //       },
  //       { 
  //         title: 'Deserts',
  //         data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
  //       },
  //     ]
  //    }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            
            <Image 
              source={require('../assets/images/recognition.png')}
              style={styles.titleImage}
            />    
            <Text style={styles.titleText}>
            Recognition
            </Text>
          </View>
         {/* {this.state.information.map((prop, key) => {
           return (
             <Accordion title="hello" data="hello please" key={key}>{prop[1]}></Accordion>
           );
        })} */}
        <Accordion title="Diagnosis" data="Signs and Symptoms:
        Common: Fever > 99.1*F - 94%, Cough - 79%, Sputum - 23%, Myalgia - 15%
        Unusual: Diarrhea - 5%, N/V - 4%, Silent hypoxemia [6] - small proportion
        Typical Time Course:  
        Onset of symptoms after exposure 4- 14 days after onset - Day 1 Fever/Cough 1-week Dyspnea " colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        <Accordion title="Laboratory" data="Pertinent lab abnormalities:
        Lymphocytopenia, mild leukopenia, mild thrombocytopenia.
        ⇑ D-dimer,⇑ Serum ferritin, ⇑ Troponin, ⇑ LDH >, ⇑ creatinine
        COVID-19 PCR Assay:
        Procedure requires a nasopharyngeal swab.
        Test was developed at JHH and returns results within 24hrs." colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        <Accordion title="Microbiology" data="" colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        <Accordion title="Imaging" data="" colorRow = "#EFCB34" colorChild = "#F3EFB1"></Accordion>
        </ScrollView>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: '#ffff',

  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor:'#ffff',
  },
  titleText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 36,
    fontWeight:'bold',
    textAlign: 'center',
    color: '#EFCB34',
  },
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
  },
});
