import React, {Component} from 'react'
import PokemonCard from './Components/PokemonCard/PokemonCard';
import axios from 'axios';
import './PokemonList.css';
const baseUrl = 'https://pokeapi.co/api/v2/'

class PokemonList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        const pokePromises = [];
        for (let i = 1; i <= 150; i++) {
            pokePromises.push(axios.get(`${baseUrl}pokemon/${i}`))
        }
        Promise
            .all(pokePromises)
            .then((res) => {
                this.setState({
                    pokemon: res.map((e) => {
                        return e.data
                    })
                })
            })
    }

    showDetails = (id) => {
        this.props.history.push(`/Pokedex/${id}`)
    }

    release = (id) => {
        this.setState({
            pokemon: this
                .state
                .pokemon
                .filter(e => e.id !== id)
        })
    }
    render() {
        console.log(this.props)
        const pokemonCards = this
            .state
            .pokemon
            .map((e) => {
                return <PokemonCard key={e.id} showDetails={this.showDetails} release={this.release} pokemon={e}/>
            })

        return (
            <div className="Poke_list">
                {pokemonCards}
            </div>
        )
    }
}

export default PokemonList