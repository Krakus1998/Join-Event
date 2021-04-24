import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/login";
import Drawer from "./drawer";
import * as Firebase from "firebase";
import React, { useEffect, useState } from "react";

const screens = {
  Login: {
    screen: Login,
  },
};

const LoginStack = createStackNavigator(screens);
export default createAppContainer(LoginStack);
