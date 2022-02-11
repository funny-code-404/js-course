import {DATA_REQUESTED, GET_DATA_FAILED, GET_DATA_SUCCEED} from "../posts/actions";


export const initialCommentsState = {
    data:[],
    error: null,
    isLoading: false
}

export const commentsReducer = (state = initialCommentsState, action) => {
    switch (action.type) {
        case DATA_REQUESTED :
            return {
                ...state,
                error: initialCommentsState.error,
                isLoading: true
            };
        case GET_DATA_SUCCEED :
            return {
                ...state,
                data: action.payload,
                error: initialCommentsState.error,
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