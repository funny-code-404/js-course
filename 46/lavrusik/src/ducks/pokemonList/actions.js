export const GET_LIST_POKEMON = 'GET_LIST_POKEMON';
export const GET_LIST_POKEMON_SUCCEED = 'GET_LIST_POKEMON_SUCCEED';
export const GET_LIST_POKEMON_FAILED = 'GET_LIST_POKEMON_FAILED';
export const ACTION_GET_LIST_POKEMON = (payload) => ({
    type: GET_LIST_POKEMON,
    payload,
})
export const ACTION_GET_LIST_POKEMON_SUCCEED = (payload) => ({
    type: GET_LIST_POKEMON_SUCCEED,
    payload,
})
export const ACTION_GET_LIST_POKEMON_FAILED = (payload) => ({
    type: GET_LIST_POKEMON_FAILED,
    payload,
})
