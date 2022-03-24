import {
  GET_POKEMONS_FAILED,
  GET_POKEMONS_REQUESTED,
  GET_POKEMONS_SUCCED,
  GET_SCOPE_DATA,
} from './actions';
import { initialPokemonsState } from './initialPokemonsState';

export const pokemonsReducer = (state = initialPokemonsState, action) => {
  switch (action.type) {
    case GET_POKEMONS_REQUESTED:
      return {
        ...state,
        error: initialPokemonsState.error,
        isLoading: true,
      };
    case GET_POKEMONS_SUCCED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_POKEMONS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case GET_SCOPE_DATA:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
