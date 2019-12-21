import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PokemonList from './pokemon-list/pokemon-list';
import PokemonInfo from './pokemon-info/pokemon-info';
import { POKEMONS_URL } from './constants';
import './main.scss';

class Main extends React.Component {

  componentDidMount() {
    this.props.addNewPokemons(this.props.pokemonsLength);
  }

  render() {
    if (!this.props.pokemonsLength) {
      return null;
    }
    return (
        <div className="main">
          <div className="itemsBlock">
              <PokemonList/>
              <input type="button"
                     value="Load More"
                     onClick={() => this.props.addNewPokemons(this.props.pokemonsLength)} 
                     className="loadBtn"/>
          </div>
          <div className="infoBlock">
            <PokemonInfo/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonsLength: state.list.length
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPokemons: (offset) => {
      const getPokemons = () => dispatch => {
        axios.get(`${POKEMONS_URL}${offset}`)
          .then(
            response => dispatch({type: 'ADD_TO_LIST_SUCCESS', newPokemons: response.data.results}),
            error => dispatch({type: 'ADD_TO_LIST_ERROR'}));
      };
      dispatch(getPokemons());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
