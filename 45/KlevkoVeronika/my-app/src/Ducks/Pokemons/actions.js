export const GET_POKEMONS_REQUESTED = 'GET_POKEMONS_REQUESTED';
export const ACTION_GET_POKEMONS_REQUESTED = (payload) => ({
  type: GET_POKEMONS_REQUESTED,
  payload,
});

export const GET_POKEMONS_SUCCED = 'GET_POKEMONS_SUCCED';
export const ACTION_GET_POKEMONS_SUCCED = (payload) => ({
  type: GET_POKEMONS_SUCCED,
  payload,
});

export const GET_POKEMONS_FAILED = 'GET_POKEMONS_FAILED';
export const ACTION_GET_POKEMONS_FAILED = (error) => ({
  type: GET_POKEMONS_FAILED,
  error,
});

export const GET_SCOPE_DATA = 'GET_SCOPE_DATA';
export const ACTION_GET_SCOPE_DATA = (payload) => ({
  type: GET_SCOPE_DATA,
  payload,
});

