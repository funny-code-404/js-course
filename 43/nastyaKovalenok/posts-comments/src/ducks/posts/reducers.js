import {DATA_REQUESTED, GET_DATA_FAILED, GET_DATA_SUCCEED} from "./actions";

export const initialPostsState = {
    data:[],
    error: null,
    isLoading: false
}

export const postsReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case DATA_REQUESTED :
            return {
                ...state,
                error: initialPostsState.error,
                isLoading: true
            };
        case GET_DATA_SUCCEED :
            return {
                ...state,
                data: action.payload,
                error: initialPostsState.error,
                isLoading: false
            };
        case GET_DATA_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default: return {...state}
    }
}