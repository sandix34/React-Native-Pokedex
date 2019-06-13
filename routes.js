import { createStackNavigator } from 'react-navigation'

import Pokedex from './screens/Pokedex'
import Details from './screens/Details'

export const AppNavigator = createStackNavigator({ Pokedex, Details })