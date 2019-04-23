import React from 'react';
import './PokemonCard.css';

export default (props) => {
    const [firstLetter, ...arr] = props.pokemon.name.split('')
    const name = `${firstLetter.toUpperCase()}${arr.join('')}`
    return (
        <div className="pokemon-card">  
            <h4>{name}</h4>
            <div className="image" style={{backgroundImage:`url(${props.pokemon.sprites.front_default})`}}>
            </div>
            <button onClick = {()=>{props.release(props.pokemon.id)}}>Release</button>
        </div>
    )
}