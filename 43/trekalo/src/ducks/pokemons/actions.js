export const GET_POKEMONS_REQUESTED = "GET_POKEMONS_REQUESTED";
export const GET_POKEMONS_SECCEED = "GET_POKEMONS_SECCEED";

export const ACTION_GET_POKEMONS_REQUESTED = (payload) => ({
  type: GET_POKEMONS_REQUESTED,
  payload,
});
export const ACTION_GET_POKEMONS_SECCEED = (payload) => ({
  type: GET_POKEMONS_SECCEED,
  payload,
});
