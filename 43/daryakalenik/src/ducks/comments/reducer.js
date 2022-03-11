import {
  LOG_DATA,
  GET_COMMENTS_SUCCEEDED,
  GET_COMMENTS_FAILED,
  GET_DATA_REQUESTED,
} from "./actions";

export const initialDataState = { data: [], error: null, isLoading: false };

export const commentsReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return { ...state, error: initialDataState.error, isLoading: true };
    case GET_COMMENTS_SUCCEEDED:
      return { ...state, data: action.payload, isLoading: false };
    case GET_COMMENTS_FAILED:
      return { ...state, error: action.error, isLoading: false };
    case LOG_DATA:
      console.log(state);
      return { ...state };
    default:
      return { ...state };
  }
};
