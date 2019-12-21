import React from 'react';
import { connect } from 'react-redux';
import PokemonCard from './pokemon-card/pokemon-card';
import './pokemon-list.scss';

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      <ul>
        {props.pokemonsList.map((pokemon, index) => 
          <PokemonCard pokemon={pokemon} className="pokemon-card" key={`${pokemon.name}-${index}`}/>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemonsList: state.list
  };
};
export default connect(
  mapStateToProps,
  null
)(PokemonList);
