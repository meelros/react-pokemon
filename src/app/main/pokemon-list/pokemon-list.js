import React from 'react';
import PokemonCard from './pokemon-card/pokemon-card';
import './pokemon-list.scss';

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      <ul>
        {props.pokemons.map((pokemon, index) => 
          <PokemonCard pokemon={pokemon} className="pokemon-card" key={`${pokemon.name}-${index}`}/>
        )}
      </ul>
    </div>
  )
}

export default PokemonList;
