import React, { useState, useEffect } from "react";
// import Home from './screens/home';
import Navigator from "./routes/loginStack";
import Edit from "./Components/editItem";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Firebase from "firebase";
import Drawer from "./routes/drawer";
import { BrowserRouter, Route } from "react-router-dom";
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "BlackOpsOne-Regular": require("./assets/fonts/BlackOpsOne-Regular.ttf"),
    "Audiowide-Regular": require("./assets/fonts/Audiowide-Regular.ttf"),
    // 'AR DESTINE-regular': require('./assets/fonts/AR DESTINE.ttf'),
  });
const Stack = createStackNavigator();
const EditStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Edit} />
  </Stack.Navigator>
);
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (Firebase.auth().currentUser) {
      setIsAuthenticated(true);
    }
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);
  if (fontsLoaded) {
    return (
      // <Home />
      isAuthenticated ? <Drawer /> : <Navigator />
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyBlsZAMvwNRedRJ00xGYFH_irdcOqpnah8",
  authDomain: "joinevent-8a703.firebaseapp.com",
  projectId: "joinevent-8a703",
  storageBucket: "joinevent-8a703.appspot.com",
  messagingSenderId: "125991892374",
  appId: "1:125991892374:web:45fc31c70277b6c87459b7",
};
!Firebase.apps.length ? Firebase.initializeApp(firebaseConfig) : Firebase.app();
