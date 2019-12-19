import React from 'react';
import axios from 'axios';
import PokemonList from './pokemon-list/pokemon-list';
import PokemonInfo from './pokemon-info/pokemon-info';
import './main.scss';

class Main extends React.Component {

  constructor (props) {
    super(props);
    this.state = {pokemons: []};
    this.getPokemonList = this.getPokemonList.bind(this);
    this.preparePokemonsData = this.preparePokemonsData.bind(this);
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    const limit = this.state.pokemons.length ? this.state.pokemons.length + 12 : 12;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    axios.get(url)
      .then(
        response => this.preparePokemonsData(response.data.results, limit),
        error => console.log(error));
  }

  preparePokemonsData(results, limit) {
    const newPokemons = limit === 12 ? results : results.slice(Math.max(results.length - 12, 1));
    this.setState({pokemons: [...this.state.pokemons, ...newPokemons]});
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
                     onClick={this.getPokemonList} 
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
