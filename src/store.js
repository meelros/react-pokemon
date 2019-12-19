import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function setPokemonInfo(state={}, action) {
    if (action.type === 'SET_INFO') {
        return {pokemonInfo: action.info};
    }
    return state;
}

const store = createStore(setPokemonInfo, applyMiddleware(thunk));

export default store;
