import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LogIn from "../screens/logIn";
import Home from "../screens/home";
// import Register from "../screens/register";

const screens = {
  // ekran logowania wywoływany jako 1 w app.js
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      headerShown: false,
    },
  },
  // ekran główny wydarzeń
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  // Register: {
  //   screen: Register,
  // },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
