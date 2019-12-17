import React from 'react';
import './pokemon-info.scss';

class PokemonInfo extends React.Component {

//   constructor(props) {
//     super(props);
//   }

  componentDidMount() {
      this.getPokemonInfo()
  }

  getPokemonInfo() {
  }

  render() {
    return (
        <div className="pokemon-info">
            <div className="avatar"></div>
            <div className="name">
                sdfgsgsdfg
            </div>
            <div className="stats"></div>
        </div>
    )
  }
}

export default PokemonInfo;
