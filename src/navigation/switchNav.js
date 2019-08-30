import { createSwitchNavigator } from 'react-navigation';

import stackNav from './stackNav';
import C_DDF0ED from '../srceen/C_DDF0ED';

export default createSwitchNavigator(
    {
        Login: {
            screen: C_DDF0ED
        },
        App: {
            screen: stackNav
        }
    },
    {
        initialRouteName: 'App'
    }
)