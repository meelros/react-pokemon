import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './pokemon-card.scss';

class PokemonCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pokemonInfo: {}};
    this.getPokemonInfo = this.getPokemonInfo.bind(this);
    this.storePokemonInfo = this.storePokemonInfo.bind(this);
    this.storeAsyncPokemonInfo = this.storeAsyncPokemonInfo.bind(this);
  }

  componentDidMount() {
      this.getPokemonInfo()
  }

  getPokemonInfo() {
      if (this.props.pokemon) {
        axios.get(this.props.pokemon.url)
        .then(
            response => this.setState({pokemonInfo: Object.assign(this.state.pokemonInfo, response.data)}),
            error => console.log(error));
      }
  }

  storePokemonInfo() {
    this.props.addInfo(this.state.pokemonInfo);
  }

  storeAsyncPokemonInfo() {
    this.props.addAsyncInfo(this.state.pokemonInfo);
  }

  render() {
    return (
        <div className="pokemon-card" onClick={this.storePokemonInfo} onContextMenu={this.storeAsyncPokemonInfo}>
            <div className="avatar">
              {this.state.pokemonInfo && this.state.pokemonInfo.sprites
                ? <img src={this.state.pokemonInfo.sprites.front_default} alt="Pokemon"></img>
                : null
              }    
            </div>
            <div className="name">
                {this.state.pokemonInfo.name}
            </div>
            <div className="skills">
                {this.state.pokemonInfo && this.state.pokemonInfo.types 
                    ? this.state.pokemonInfo.types.map(typeInfo => 
                        <div key={typeInfo.type.name} 
                             className={`type type-${typeInfo.type.name}`}>{typeInfo.type.name}
                        </div>
                      )
                    : null
                }
            </div>
        </div>
    )
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    addInfo: (info) => {
      dispatch({type: 'SET_INFO', info});
    },
    addAsyncInfo: (info) => {
      const asyncGetInfo = () => dispatch => {
        setTimeout(() => {
          dispatch({type: 'SET_INFO', info});
        }, 1000);
      };
      dispatch(asyncGetInfo());
    }
  })
)(PokemonCard);
