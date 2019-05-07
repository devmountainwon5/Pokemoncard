import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import PokemonList from './Views/Pokemon_List/PokemonList'
import Pokedex from './Views/Pokedex/Pokedex'
import CaughtList from './Views/Caught_List/CaughtList'
import Header from './Shared/header'

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/CaughtPokemon" component={CaughtList} />
            <Route path="/Pokedex/:id" component={Pokedex} />
            <Route path="/" component={PokemonList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
