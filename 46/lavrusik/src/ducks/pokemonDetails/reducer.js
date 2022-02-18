import {
    GET_DETAILS_POKEMON,
    GET_DETAILS_POKEMON_FAILED,
    GET_DETAILS_POKEMON_SUCCEED,
  
} from './actions';
export const initialPokemonDetailsState = {
    data: {},
    error: null,
    isLoading:false,
}
export const pokemonDetailsReducer = (state = initialPokemonDetailsState, action) => {
    switch (action.type) {
        case GET_DETAILS_POKEMON:
            return {
                ...state,
                error: initialPokemonDetailsState.error,
                isLoading: true,
            };
        case GET_DETAILS_POKEMON_SUCCEED:
            return {
                ...state, data: action.payload, isLoading: false,
            };
        case GET_DETAILS_POKEMON_FAILED:
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