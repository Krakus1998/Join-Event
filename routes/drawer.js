import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './eventStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({

    'Strona główna': {
        screen: HomeStack,
    },
    Wydarzenia: {
        screen: AboutStack,
    },
});

export default createAppContainer(RootDrawerNavigator);