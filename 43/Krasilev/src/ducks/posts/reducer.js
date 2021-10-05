import { REQUEST_DATA, GET_DATA_SUCCEED, GET_DATA_FAILED } from './actions';

export const initialPostState = {
  data: [],
  error: null,
  isFetching: false,
};

export const posts = (state = initialPostState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
    return { ...state, isFetching: true };
    case GET_DATA_SUCCEED:
    return { ...state, data: action.payload, isFetching: false };
    case GET_DATA_FAILED:
    return { ...state, data: action.payload, isFetching: false };
    default:
      return { ...state };
  }
};
