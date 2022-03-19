import initialPokemonDetailsState from "./initialState";
import {
  GET_POKEMONS_DETAILS_SUCCEEDED,
  GET_POKEMONS_DETAILS_REQUESTED,
  GET_POKEMONS_DETAILS_FAILED,
} from "./actions";

const pokemonDetailsReducer = (state = initialPokemonDetailsState, action) => {
  switch (action.type) {
    case GET_POKEMONS_DETAILS_REQUESTED:
      return {
        ...state,
        error: initialPokemonDetailsState.error,
        isLoading: true,
      };
    case GET_POKEMONS_DETAILS_SUCCEEDED:
      return { ...state, data: action.payload, isLoading: false };
    case GET_POKEMONS_DETAILS_FAILED:
      return { ...state, error: action.error, isLoading: false };
    default:
      return { ...state };
  }
};

export default pokemonDetailsReducer;
