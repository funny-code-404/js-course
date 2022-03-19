import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "../ducks/pokemons/reducer";
import pokemonDetailsReducer from "../ducks/pokemonDetails/reducer";

const rootReducer = combineReducers({
  data: pokemonReducer,
  details: pokemonDetailsReducer,
});

export default rootReducer;
