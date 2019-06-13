import React, { Component } from 'react';
import Pokedex from './screens/Pokedex'

import { AppNavigator, TabNavigator } from './routes'
import { createAppContainer } from 'react-navigation'

const Navigator = createAppContainer(TabNavigator)
 
export default class App extends Component {
  render () {
    return (
      <Navigator />
    );
  }
  
}

