import React from 'react';
import axios from 'axios';
import PokemonList from './pokemon-list/pokemon-list';
import PokemonInfo from './pokemon-info/pokemon-info';
import './main.scss';

class Main extends React.Component {

  constructor (props) {
    super(props);
    this.state = {pokemons: []};
    this.getPokemonList.bind(this);
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then(
        response => this.setState({pokemons: this.state.pokemons.concat(response.data.results)}),
        error => console.log(error));
  }

  render() {
    if (!this.state.pokemons || !this.state.pokemons.length) {
      return null;
    }
    return (
        <div className="main">
          <div className="itemsBlock">
              <PokemonList pokemons={this.state.pokemons}/>
              <input type="button"
                     value="Load More"
                     onClick={() => this.getPokemonList()} 
                     className="loadBtn"/>
          </div>
          <div className="infoBlock">
            <PokemonInfo/>
          </div>
        </div>
    )
  }
}

export default Main;
