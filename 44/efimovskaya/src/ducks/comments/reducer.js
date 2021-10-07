import {
  GET_DATA_COMMENTS_FAILED,
  GET_DATA_COMMENTS_SUCCEED,
  GET_DATA_COMMENTS_REQUESTED,
} from '../comments/actions';

export const initialCommentsState = {
  data: [],
  error: null,
};

export const comments = (state = initialCommentsState, action) => {
  switch (action.type) {
    case GET_DATA_COMMENTS_REQUESTED:
      return { ...state, error: null };
    case GET_DATA_COMMENTS_FAILED:
      return { ...state, error: action.payload?.message};
    case GET_DATA_COMMENTS_SUCCEED:
      return { ...state, data: action.payload, error: null };
    default:
      return { ...state };
  }
};
