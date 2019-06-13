import React, { Component } from 'react';
import Pokedex from './screens/Pokedex'
import { Platform } from 'react-native'

import { TabNavigator, DrawerNavigator } from './routes'
import { createAppContainer } from 'react-navigation'

const IosNavigator = createAppContainer(TabNavigator)
const AndroidNavigator = createAppContainer(DrawerNavigator)

const App = () => Platform.OS === 'ios' ? <IosNavigator /> : <AndroidNavigator />

export default App

