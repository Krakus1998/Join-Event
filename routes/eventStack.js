import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/events";
import Header from "../shared/header";
import React from "react";
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => (
          <Header navigation={navigation} title="Wydarzenia" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default AboutStack;
