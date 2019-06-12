import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ListItem extends Component {
    
    render() { 
        return ( 
            <View>
                <Text>{ this.props.pokemon.name }</Text>
            </View>
         );
    }
}
 
export default ListItem;