import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation }) => {
            return{   
                             
                    headerTitle: () => <Header navigation={navigation} title='Join Event'/>,
            }
        }
    },

}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headStyle: { backgroundColor: '#eee', height: 60 }
    }
})

export default AboutStack;