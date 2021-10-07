export const getPostsAction = (path) => async (dispatch) => {
  try {
    dispatch(ACTION_REQUEST_DATA());
    console.log(path)
    const res = await fetch(path);
    const data = await res.json();

    dispatch(ACTION_GET_DATA_SUCCEED(data));
  } catch (e) {
    dispatch(ACTION_GET_DATA_FAILED(e));
  }
};

export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const ACTION_REQUEST_DATA = () => {
  return {
    type: GET_DATA_REQUESTED,
  };
};

export const GET_DATA_SUCCEED = 'GET_DATA_SUCCEED';
export const ACTION_GET_DATA_SUCCEED = (data) => {
  return {
    type: GET_DATA_SUCCEED,
    payload: data,
  };
};

export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const ACTION_GET_DATA_FAILED = (error) => {
  return {
    type: GET_DATA_FAILED,
    payload: error,
  };
};
