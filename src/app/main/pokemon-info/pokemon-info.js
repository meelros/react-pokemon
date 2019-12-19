import React from 'react';
import { connect } from 'react-redux';
import './pokemon-info.scss';

class PokemonInfo extends React.Component {

  constructor(props) {
    super(props);
    this.getStat = this.getStat.bind(this);
  }

  getStat(statName) {
    let statValue;
    this.props.store.pokemonInfo.stats.map(statItem => {
      if (statItem.stat.name === statName) {
        statValue = statItem.base_stat;
      }
      return null;
    });
    return statValue;
  }

  render() {
    if (!this.props.store.pokemonInfo) {
      return null;
    }

    return (
        <div className="pokemon-info">
            <div className="avatar">
              <img src={this.props.store.pokemonInfo.sprites.front_default} alt="Pokemon"></img>
            </div>
            <div className="name">
               {this.props.store.pokemonInfo.name}
            </div>
            <div className="stats">
              <table>
                <tbody>
                  <tr>
                    <th>Type</th>
                    <th>{this.props.store.pokemonInfo.types.map(typeInfo => `${typeInfo.type.name} `)}</th>
                  </tr>
                  <tr>
                    <th>Attack</th>
                    <th>{this.getStat('attack')}</th>
                  </tr>
                  <tr>
                    <th>Defense</th>
                    <th>{this.getStat('defense')}</th>
                  </tr>
                  <tr>
                    <th>HP</th>
                    <th>{this.getStat('hp')}</th>
                  </tr>
                  <tr>
                    <th>SP Attack</th>
                    <th>{this.getStat('special-attack')}</th>
                  </tr>
                  <tr>
                    <th>SP Defense</th>
                    <th>{this.getStat('special-defense')}</th>
                  </tr>
                  <tr>
                    <th>Speed</th>
                    <th>{this.getStat('speed')}</th>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <th>{this.props.store.pokemonInfo.weight}</th>
                  </tr>
                  <tr>
                    <th>Total moves</th>
                    <th>{this.props.store.pokemonInfo.moves.length}</th>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    )
  }
}

export default connect(
  state => ({store: state})
)(PokemonInfo);
