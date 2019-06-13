import React, { Component } from 'react';
import Pokedex from './screens/Pokedex'

import { AppNavigator } from './routes'
import { createAppContainer } from 'react-navigation'

const Navigator = createAppContainer(AppNavigator)
 
export default class App extends Component {
  render () {
    return (
      <Navigator />
    );
  }
  
}

