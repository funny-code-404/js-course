import initialPokemonState from "./initialState";
import {
  GET_POKEMONS_REQUESTED,
  GET_POKEMONS_SUCCEEDED,
  GET_POKEMONS_FAILED,
} from "./actions";

const pokemonReducer = (state = initialPokemonState, action) => {
  switch (action.type) {
    case GET_POKEMONS_REQUESTED:
      return { ...state, error: initialPokemonState.error, isLoading: true };
    case GET_POKEMONS_SUCCEEDED:
      return { ...state, data: action.payload, isLoading: false };
    case GET_POKEMONS_FAILED:
      return { ...state, error: action.error, isLoading: false };
    default:
      return { ...state };
  }
};

export default pokemonReducer;
