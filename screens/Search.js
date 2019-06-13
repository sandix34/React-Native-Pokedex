import React, { Component } from 'react';

import { Text, View } from 'react-native';

export default class Search extends Component {

  static navigationOptions = {
    title: 'Search'
  }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>
                  Search screen
              </Text>
            </View>
          ); 
    }
  
}
