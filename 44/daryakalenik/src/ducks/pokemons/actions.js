export const GET_POKEMONS_SUCCEEDED = "GET_POKEMONS_SUCCEEDED";
export const ACTION_GET_POKEMONS_SUCCEEDED = (payload) => ({
  type: GET_POKEMONS_SUCCEEDED,
  payload,
});

export const GET_POKEMONS_FAILED = "GET_POKEMONS_FAILED";
export const ACTION_GET_POKEMONS_FAILED = (error) => ({
  type: GET_POKEMONS_FAILED,
  error,
});

export const GET_POKEMONS_REQUESTED = "GET_POKEMONS_REQUESTED";
export const ACTION_GET_POKEMONS_REQUESTED = (payload) => ({
  type: GET_POKEMONS_REQUESTED,
  payload,
});
