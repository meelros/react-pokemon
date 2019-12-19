import { createStore } from 'redux';

function setPokemonInfo(state={}, action) {
    if (action.type === 'SET_INFO') {
        return {pokemonInfo: action.info};
    }
    return state;
}

const store = createStore(setPokemonInfo);

export default store;
