import { createBottomTabNavigator } from 'react-navigation';

import C_376967 from '../srceen/C_376967';
import C_C3BED4 from '../srceen/C_C3BED4';
import C_495A80 from '../srceen/C_495A80';

export default createBottomTabNavigator(
    {
        C_495A80: {
            screen: C_495A80,
        },
        C_376967: {
            screen: C_376967
        },
        C_C3BED4: {
            screen: C_C3BED4
        }
    }
)