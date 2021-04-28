import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/logOut';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: null,
                headerTitle: () => <Header navigation={navigation} title='Strona główna' />,
            }
        }
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headStyle: { backgroundColor: '#eee', height: 60 }

    }
})

export default HomeStack;
