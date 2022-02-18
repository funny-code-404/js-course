import {
    GET_LIST_POKEMON,
    GET_LIST_POKEMON_FAILED,
    GET_LIST_POKEMON_SUCCEED,
} from './actions';

export const initialPokemonListState = {
    data:[],
    error: null,
    isLoading:false,
}
export const pokemonListReducer = (state = initialPokemonListState, action) => {
    switch (action.type) {
        case GET_LIST_POKEMON:
            return {
                ...state,
                error: initialPokemonListState.error,
                isLoading: true,
            };
        case GET_LIST_POKEMON_SUCCEED:
            return {
                ...state, data: action.payload, isLoading: false,
            };
        case GET_LIST_POKEMON_FAILED:
            return {
                ...state,
                error: action.error, isLoading: false,
            };
        default:
            return {
                ...state,
            }
    }
};