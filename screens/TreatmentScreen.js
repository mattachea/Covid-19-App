import React, {Component} from 'react';
import Accordion from '../components/Accordion'

import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default class TreatmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information :[
        { 
          title: 'Non Veg Biryanis', 
          data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        { 
          title: 'Pizzas',
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        { 
         title: 'Drinks',
         data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
        },
        { 
          title: 'Deserts',
          data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            
            <Image 
              source={require('../assets/images/treatment.png')}
              style={styles.titleImage}
            />    
            <Text style={styles.titleText}>
            Recognition
            </Text>
          </View>
         {/* {this.state.information.map((prop, key) => {
           return (
             <Accordion title="hello" data="bitch please" key={key}>{prop[1]}></Accordion>
           );
        })} */}
        <Accordion title="Overall" data="ALWAYS wear PPE and PAPR or N95 + Face Shield Clustered care. Be proactive regarding procedures" colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Medications" data="Currently limited data on antiviral therapy.
Data on steroid is conflicting [11,12]
Consult ID. Enroll into clinical trials. Lopinavir/Ritonavir has no benefit [10]
Steroids can be considered for other indications (e.g.: COPD exacerbation)" colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Fluids Feeding Renal" data="Avoid 30ml/kg bolus.
Patients often have stopped eating for several days.
Renal failure is common
Conservative fluid management. Early vasopressor. PRN Fluids.
Early feeding is important - often through NG or ND.
Consider CVVH. If unavailable, can use iHD w low dose vasopressors." colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Respiratory Care" data="ALWAYS have patients wear a surgical mask.
High flow NC: do NOT exceed 40L/min flow.
If FiO2 > 50% call for evaluation of intubation.
Do NOT wait to intubate.
Early proning is recommended - lung protection
Avoid bronchoscopy - risk of aerosolization
VV ECMO may be considered
Intermittent monitoring with bedside ultrasound.
Nasal cannula (NC) and High flow NC under a surgical mask.
ARDS protocol 6 ml/kg of predicted body weight.[13]
Plateau pressure < 30 cm H2O and Driving Pressure < 14 cm H2O [14].
If P:F < 150 mmHg, prone positioning for at least 18-24 hours daily [15]
Consider neuromuscular blockade and iNO
Permissive hypercapnia pH > 7.2" colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Intubation" data="Caution! Aerosolizing procedure.
Avoid bag-valve ventilation.
Have norepi, sedation and ventilator ready.
PREOXYGENATE with non-rebreather 100% for 5 min.
PAPR and full modified PPE including 3 sets of gloves to be worn.
Airway team:One nurse, one intubator +/- assistant, one RT.
Video + standard laryngoscope w/ sized blades. 7 and 7.5 ETT + stylet.
● Yankauer suction, oral airways, LMA +/- Bougie
● CO2 colorimetric detector, high efficiency hydrophobic filter" colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Cardiac" data="Emerging concern for viral cardiomyopathy.
Ventricular arrhythmia and asystole has been reported.
● May occur as lungs begin to recover
Do NOT bag ventilate during a code unless intubated.
Critical Care Ultrasound for Monitoring
Rapid LV assessment with POCUS - concern regarding myocarditis
Early cardiology consult with a new depressed function or arrhythmia.
Inotropic support may be considered" colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
        <Accordion title="Discharge" data="Based on recommendations from China: no fever for at least 3 days, substantial lungs’ improvement in imaging studies, clinical
remission of respiratory symptoms, and two throat-swab samples negative for SARS-CoV-2 RNA obtained at least 24 h apart.[2]" colorRow = "#E75351" colorChild = "#bcf2a0"></Accordion>
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
    color: '#E75351',
  },
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
  },
});
