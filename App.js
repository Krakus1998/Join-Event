import React, { useState, useEffect } from "react";
// import Home from './screens/home';
import Navigator from "./routes/drawer";
import Edit from "./Components/editItem";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Firebase from "firebase";
import Login from "./screens/login";
import Events from "./screens/events";
import Settings from "./screens/settings";

const Stack = createStackNavigator();
const AuthorizationStack = createStackNavigator();

const AuthorizationScreens = () => {
  return (
    <AuthorizationStack.Navigator>
      <AuthorizationStack.Screen name="Login" component={Login} />
    </AuthorizationStack.Navigator>
  );
};
const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "BlackOpsOne-Regular": require("./assets/fonts/BlackOpsOne-Regular.ttf"),
    "Audiowide-Regular": require("./assets/fonts/Audiowide-Regular.ttf"),
    // 'AR DESTINE-regular': require('./assets/fonts/AR DESTINE.ttf'),
  });

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
      // <Navigator />

      <NavigationContainer>
        {isAuthenticated ? <Screens /> : <AuthorizationScreens />}
      </NavigationContainer>
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
