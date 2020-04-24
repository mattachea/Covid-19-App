import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";

import HomeScreen from "./screens/HomeScreen";
import ClinicianScreen from "./screens/ClinicianScreen";

import VideoTutorialsScreen from "./screens/VideoTutorialsScreen";
import VideoTutorial from "./components/VideoTutorial";

import ResourcesScreen from "./screens/ResourcesScreen";

import ButtonScreen from "./components/ButtonScreen";
import CPRContent from "./components/CPRContent";

import VentilationScreen from "./screens/VentilationScreen";
import Ventilator from "./components/Ventilator";

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
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
           //Google FiraSans
          "FiraSans-italic": require("./assets/fonts/FiraSans-Italic.ttf"),
          "FiraSans-regular": require("./assets/fonts/FiraSans-Regular.ttf"),
          "FiraSans-boldItalic": require("./assets/fonts/FiraSans-BoldItalic.ttf"),
          "FiraSans-bold": require("./assets/fonts/FiraSans-Bold.ttf"),
          "FiraSans-medium": require("./assets/fonts/FiraSans-Medium.ttf"),
          "FiraSans-mediumItalic": require("./assets/fonts/FiraSans-MediumItalic.ttf"),
          //Avenir Fonts
          "Avenir-black": require("./assets/fonts/AvenirLTStd-Black.otf"), //avenir fonts
          "Avenir-book": require("./assets/fonts/AvenirLTStd-Book.otf"), //avenir fonts
          "Avenir-roman": require("./assets/fonts/AvenirLTStd-Roman.otf"), //avenir fonts

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

  Platform.OS === "ios" && <StatusBar barStyle="dark-content" />;

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen name="About" component={BottomTabNavigator} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen
              name="Clinician Pocket Reference"
              component={ClinicianScreen}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Ventilation"
              component={VentilationScreen}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Tutorscreen"
              component={VideoTutorialsScreen}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Resources"
              component={ResourcesScreen}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Buttonscreen"
              component={ButtonScreen}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="CPRContent"
              component={CPRContent}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Ventscreen"
              component={VentilationScreen}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Ventilator"
              component={Ventilator}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Video Tutorial"
              component={VideoTutorial}
              options={{
                title: null,
              }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
