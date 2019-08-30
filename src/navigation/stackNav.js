import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import C_C7FFEC from '../srceen/C_C7FFEC';
import tabNav from './tabNav';

export default createStackNavigator(
    {
        Main: {
            screen: tabNav,
            navigationOptions: {
                header: null,
            }
        },
        C_C7FFEC: {
            screen: C_C7FFEC
        }
    }
)