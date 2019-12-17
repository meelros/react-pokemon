import React from 'react';
import PokemonCard from './pokemon-card/pokemon-card';
import './pokemon-list.scss';

class PokemonList extends React.Component {

  render() {
    return (
        <div className="pokemon-list">
          <ul>
            {this.props.pokemons.map((pokemon, index) => 
              <PokemonCard pokemon={pokemon} className="pokemon-card" key={`${pokemon.name}-${index}`}/>
            )}
          </ul>
        </div>
    )
  }
}

export default PokemonList;
