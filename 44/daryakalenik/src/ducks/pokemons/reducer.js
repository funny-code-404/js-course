import initialPokemonState from "./initialState";
import { createSlice } from "@reduxjs/toolkit";
// import {
//   GET_POKEMONS_REQUESTED,
//   GET_POKEMONS_SUCCEEDED,
//   GET_POKEMONS_FAILED,
// } from "./actions";

// const pokemonReducer = (state = initialPokemonState, action) => {
//   switch (action.type) {
//     case GET_POKEMONS_REQUESTED:
//       return { ...state, error: initialPokemonState.error, isLoading: true };
//     case GET_POKEMONS_SUCCEEDED:
//       return { ...state, data: action.payload, isLoading: false };
//     case GET_POKEMONS_FAILED:
//       return { ...state, error: action.error, isLoading: false };
//     default:
//       return { ...state };
//   }
// };

const initialState = { data: [], error: null, isLoading: false };

const reducer = createSlice({
  name: `pokemonNames`,
  initialState,
  reducers: {
    GET_POKEMONS_REQUESTED: (state, action) => {
      state.error = initialPokemonState.error;
      state.isLoading = true;
    },
    GET_POKEMONS_SUCCEEDED: (state, action) => {
      state.error = initialPokemonState.error;
      state.data = action.payload;
      state.isLoading = false;
    },
    GET_POKEMONS_FAILED: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const pokemonReducer = reducer.reducer;
export const {
  GET_POKEMONS_REQUESTED,
  GET_POKEMONS_SUCCEEDED,
  GET_POKEMONS_FAILED,
} = reducer.actions;

console.dir(pokemonReducer);
