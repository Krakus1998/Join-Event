import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Header from "../shared/header";
import React from "react";
import Edit from "../Components/editItem";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => (
          <Header navigation={navigation} title="Strona główna" />
        ),
      };
    },
  },
  Edit: {
    screen: Edit,
    navigationOptions: {
      title: "Edit",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default HomeStack;
