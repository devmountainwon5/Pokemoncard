import React, {Component} from 'react';
import './Pokedex.css'
import {Link } from 'react-router-dom'
import axios from 'axios';
const baseUrl = 'https://pokeapi.co/api/v2/'

class Pokedex extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonDetails:null,
    }
  }

  componentDidMount(){
    debugger
    axios.get(`${baseUrl}pokemon/${this.props.match.params.id}`)
    .then((res)=>{
      console.log(res.data)
      this.setState({
        pokemonDetails: res.data
      })
    })
  }

  render(){
    const poke = this.state.pokemonDetails
    if(this.state.pokemonDetails){
      const moves = poke.moves.map((e)=>{
          return <p>{e.move.name}</p>
      })
      return (
        <div className="Pokedex">
          <h1>{poke.name}</h1>
          <div className="images">
            <img src={poke.sprites.front_default} alt="Pokemon"/>
            <img src={poke.sprites.back_default} alt="Pokemon"/>
            <br/>
            <img src={poke.sprites.front_shiny} alt="Pokemon"/>
            <img src={poke.sprites.back_shiny} alt="Pokemon"/>
          </div>
          {moves}
        </div>
      );
    }else{
      return (
        <div className="Pokedex">
            loading....
        </div>
      );
    }

  }
}

export default Pokedex;
