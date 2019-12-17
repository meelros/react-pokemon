import React from 'react';
import axios from 'axios';
import './pokemon-card.scss';

class PokemonCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pokemonInfo: {}};
    this.getPokemonInfo.bind(this);
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

  render() {
    if (!this.state.pokemonInfo) {
        return null;
    }
    return (
        <div className="pokemon-card">
            <div className="avatar"></div>
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

export default PokemonCard;
