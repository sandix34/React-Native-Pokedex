import React, { Component } from "react";

import { Text, View, TextInput } from "react-native";

import colors from '../utils/colors'

export default class Search extends Component {
  static navigationOptions = {
    title: "Search"
  }

  state = {
    search: ''
  }

  handleSearch = async search => {
    this.setState({ search })

    if (search.length >= 3) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      const pokemon = await data.json()

      if (pokemon) {
        this.props.navigation.navigate('Details', pokemon)
        this.setState({ search: '' })
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
        <TextInput
          style={{
            height: 56,
            width: "100%",
            borderWidth: 1,
            borderColor: colors.border,
            borderBottomWidth: 4,
            padding: 8
          }}
          value={this.state.search}
          onChangeText={search => this.handleSearch(search)}
          autoCorrect={false}
          placeholder="Search pokemon by name"
        />
        <Text>{this.state.search && `No result for ${this.state.search}`}</Text>
      </View>
    );
  }
}
