import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const infoInitialState = {pokemonInfo: {}};
const listInitialState = [];

function pokemonInfoReducer(state = infoInitialState, action) {
    if (action.type === 'SET_INFO') {
        return {pokemonInfo: action.info};
    }
    return state;
}

function pokemonsListReducer(state = listInitialState, action) {
    if (action.type === 'ADD_TO_LIST_SUCCESS') {
        return [...state, ...action.newPokemons];
    }
    else if (action.type === 'ADD_TO_LIST_ERROR') {
        return [...state];
    }
    return state;
}

const rootReducers = combineReducers({info: pokemonInfoReducer, list: pokemonsListReducer});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
