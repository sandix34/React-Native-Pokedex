import React, { Component } from 'react';

import { Text, View } from 'react-native';

export default class Id extends Component {

  static navigationOptions = {
    title: 'ID'
  }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>
                  Id screen
              </Text>
            </View>
          ); 
    }
  
}
