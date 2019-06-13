import React, { Component } from 'react';

import { Text, View, Image } from 'react-native';

import { capitalize } from '../utils/helpers'

export default class Details extends Component {

  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam('name')
    return {
      title: capitalize(name) 
    }
  }

    render() {

      const { navigation } = this.props
      const name = navigation.getParam('name')
      const sprites = navigation.getParam('sprites')

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>
                  {capitalize(name)}
              </Text>
              <Image
                style={{
                  width: 96,
                  height: 96,
                }}
                source={{ uri: sprites.front_default }}
              />
            </View>
          ); 
    }
  
}
