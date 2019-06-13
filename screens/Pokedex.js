import React, { Component } from "react";

import { Text, View, FlatList } from "react-native";

import Pokemon from '../components/Pokemon'

import { capitalize } from "../utils/helpers"

export default class Pokedex extends Component {
  static navigationOptions = {
    title: "Pokedex"
  }
  state = {
    pokemons: []
  }

  componentDidMount = () => {
      this.getPokemons('https://pokeapi.co/api/v2/pokemon')
  }

  // méthode pour apeller les pokémons
  getPokemons = async api => {
      // on fait une copie du state
      const pokemons = [ ...this.state.pokemons  ]    
      // requête
      const data = await fetch(api)
      // transform la réponse en JSON et "await" temps que c'est pas fait on ne passe pas à la suite 
      const json = await data.json()
      // mise à jour du state
      await pokemons.push(...json.results)
      this.setState({ pokemons })
  } 

  render() {
    return (
      <FlatList
        data={this.state.pokemons}
        renderItem={({ item }) => <Pokemon name={ item.name }/>}
        keyExtractor={item => item.name}
      />
    );
  }
}
