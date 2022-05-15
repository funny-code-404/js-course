import {
    GET_DATA_FAILED,
    GET_DATA_LIST_REQUESTED,
    GET_DATA_LIST_SUCCEED,
} from "./actions";

export const pokemonsInitialState = {
    listData: [],
    detailsData:[],
    error: null,
    isLoading: false
}

export const pokemonsReducer = (state = pokemonsInitialState, action) => {

    switch (action.type){

        case GET_DATA_LIST_REQUESTED : return {
            ...state,
            isLoading: true,
            error: pokemonsInitialState.error
        };

        case GET_DATA_LIST_SUCCEED : return {
            ...state,
            listData: action.payload,
            isLoading: false
        };

        case GET_DATA_FAILED: return {
            ...state,
            error: action.payload.error,
            isLoading: false

        };

        default: return {...state}
    }
}
