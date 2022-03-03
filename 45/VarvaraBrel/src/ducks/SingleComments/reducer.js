import {
  GET_SINGLE_DATA_LOADING,
  GET_SINGLE_DATA_SUCCEED,
  GET_SINGLE_DATA_FAILED,
} from './actions';

export const initialCommentSingleState = {
  data: [],
  error: null,
  isLoading: false,
};

export const commentsSingleReducer = (
  state = initialCommentSingleState,
  action
) => {
  switch (action.type) {
    case GET_SINGLE_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SINGLE_DATA_SUCCEED: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case GET_SINGLE_DATA_FAILED: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
