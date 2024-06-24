import { GET_POKEMONS_REQUESTED } from "./actions";
import { GET_POKEMONS_SECCEED } from "./actions";
export const initialPokemonsState = { data: [] };

export const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMONS_REQUESTED:
      return { ...state };
    case GET_POKEMONS_SECCEED:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};
