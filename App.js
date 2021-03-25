import React, { useState } from 'react';
// import Home from './screens/home';
import Navigator from './routes/drawer';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'BlackOpsOne-Regular': require('./assets/fonts/BlackOpsOne-Regular.ttf'),
  'Audiowide-Regular': require('./assets/fonts/Audiowide-Regular.ttf'),
  // 'AR DESTINE-regular': require('./assets/fonts/AR DESTINE.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      // <Home />
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}
