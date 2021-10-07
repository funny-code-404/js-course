export const getCommentsAction = (path) => async (dispatch) => {
  try {
    dispatch(ACTION_REQUEST_DATA_COMMENTS());
    console.log(path)
    const res = await fetch(path);
    const data = await res.json();

    dispatch(ACTION_GET_DATA_COMMENTS_SUCCEED(data));
  } catch (e) {
    dispatch(ACTION_GET_DATA_COMMENTS_FAILED(e));
  }
};

export const GET_DATA_COMMENTS_REQUESTED = 'GET_DATA_REQUESTED';
export const ACTION_REQUEST_DATA_COMMENTS = () => {
  return {
    type: GET_DATA_COMMENTS_REQUESTED,
  };
};

export const GET_DATA_COMMENTS_SUCCEED = 'GET_DATA_SUCCEED';
export const ACTION_GET_DATA_COMMENTS_SUCCEED = (data) => {
  return {
    type: GET_DATA_COMMENTS_SUCCEED,
    payload: data,
  };
};

export const GET_DATA_COMMENTS_FAILED = 'GET_DATA_FAILED';
export const ACTION_GET_DATA_COMMENTS_FAILED = (error) => {
  return {
    type: GET_DATA_COMMENTS_FAILED,
    payload: error,
  };
};
