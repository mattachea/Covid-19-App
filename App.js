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

// import Vent1Screen from './screens/Vent1Screen';
// import Vent2Screen from './screens/Vent2Screen';
// import Vent3Screen from './screens/Vent3Screen';
// import Vent4Screen from './screens/Vent4Screen';

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

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
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

            {/* <Stack.Screen name="Vent1" component={Vent1Screen} options={{ title: null }}/>
            <Stack.Screen name="Vent2" component={Vent2Screen} options={{ title: null }}/>
            <Stack.Screen name="Vent3" component={Vent3Screen} options={{ title: null }}/>
            <Stack.Screen name="Vent4" component={Vent4Screen} options={{ title: null }}/> */}
            
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
