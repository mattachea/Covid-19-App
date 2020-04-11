import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

import HomeScreen from './screens/HomeScreen';

import ClinicianScreen from './screens/ClinicianScreen';
import EpidemiologyScreen from './screens/EpidemiologyScreen';
import RecognitionScreen from './screens/RecognitionScreen';
import TreatmentScreen from './screens/TreatmentScreen';

import VentilationScreen from './screens/VentilationScreen';
import PPEScreen from './screens/PPEScreen';
import ResourcesScreen from './screens/ResourcesScreen';

import Vent1Screen from './screens/Vent1Screen';
import Vent2Screen from './screens/Vent2Screen';
import Vent3Screen from './screens/Vent3Screen';
import Vent4Screen from './screens/Vent4Screen';

import DiseaseAgentScreen from './screens/DiseaseAgentScreen';
import TransmissionScreen from './screens/TransmissionScreen';
import R0Screen from './screens/R0Screen';
import CaseFatalityScreen from './screens/CaseFatalityScreen';
import RiskFactorsScreen from './screens/RiskFactorsScreen';

import DiagnosisScreen from './screens/DiagnosisScreen';
import LaboratoryScreen from './screens/LaboratoryScreen';
import MicrobiologyScreen from './screens/MicrobiologyScreen';
import ImagingScreen from './screens/ImagingScreen';
const Stack = createStackNavigator(); 

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  // Put below View
  /*{Platform.OS === 'ios' && <StatusBar barStyle="default" />}*/

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {<StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

            <Stack.Screen name="Clinician Pocket Reference" component={ClinicianScreen} options={{ title: null }}/>
            <Stack.Screen name="Epidemiology" component={EpidemiologyScreen} options={{ title: null }} />
            <Stack.Screen name="Recognition" component={RecognitionScreen} options={{ title: null }}/>
            <Stack.Screen name="Treatment" component={TreatmentScreen} options={{ title: null }}/>

            <Stack.Screen name="Ventilation" component={VentilationScreen} options={{ title: null }}/>
            <Stack.Screen name="PPE" component={PPEScreen} options={{ title: null }}/>
            <Stack.Screen name="Resources" component={ResourcesScreen} options={{ title: null }}/>

            <Stack.Screen name="Vent1" component={Vent1Screen} options={{ title: null }}/>
            <Stack.Screen name="Vent2" component={Vent2Screen} options={{ title: null }}/>
            <Stack.Screen name="Vent3" component={Vent3Screen} options={{ title: null }}/>
            <Stack.Screen name="Vent4" component={Vent4Screen} options={{ title: null }}/> 
            
            <Stack.Screen name="DiseaseAgent" component={DiseaseAgentScreen} options={{ title: null }}/> 
            <Stack.Screen name="Transmission" component={TransmissionScreen} options={{ title: null }}/> 
            <Stack.Screen name="R0" component={R0Screen} options={{ title: null }}/> 
            <Stack.Screen name="CaseFatality" component={CaseFatalityScreen} options={{ title: null }}/> 
            <Stack.Screen name="RiskFactors" component={RiskFactorsScreen} options={{ title: null }}/> 

            <Stack.Screen name="Diagnosis" component={DiagnosisScreen} options={{ title: null }}/> 
            <Stack.Screen name="Laboratory" component={LaboratoryScreen} options={{ title: null }}/> 
            <Stack.Screen name="Microbiology" component={MicrobiologyScreen} options={{ title: null }}/> 
            <Stack.Screen name="Imaging" component={ImagingScreen} options={{ title: null }}/> 
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
