import {
  GET_DATA_FAILED,
  GET_DATA_SUCCEED,
  GET_DATA_REQUESTED,
} from '../posts/actions';

export const initialPostsState = {
  data: [],
  error: null,
  isFetching: false,
};

export const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return { ...state, error: null };
    case GET_DATA_FAILED:
      return { ...state, error: action.payload?.message};
    case GET_DATA_SUCCEED:
      return { ...state, data: action.payload, error: null };
    default:
      return { ...state };
  }
};
