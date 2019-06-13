import React, { Component } from 'react';
import Pokedex from './screens/Pokedex'

import { TabNavigator, DrawerNavigator } from './routes'
import { createAppContainer } from 'react-navigation'

const Navigator = createAppContainer(DrawerNavigator)
 
export default class App extends Component {
  render () {
    return (
      <Navigator />
    );
  }
  
}

