export const getPostsAction = (path) => async (dispatch) => {
  try {
    dispatch(ACTION_REQUEST_DATA());
    const res = await fetch(path);
    const data = await res.json();
    dispatch(ACTION_GET_DATA_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_GET_DATA_FAILED(error));
  }
};

export const REQUEST_DATA = 'REQUEST_DATA';
export const ACTION_REQUEST_DATA = () => ({
    type: REQUEST_DATA,
  });

export const GET_DATA_SUCCEED = 'GET_DATA_SUCCEED';
export const ACTION_GET_DATA_SUCCEED = (data) => ({
    type: GET_DATA_SUCCEED,
    payload: data,
  });

export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const ACTION_GET_DATA_FAILED = (error) => ({
    type: GET_DATA_FAILED,
    payload: error,
  });
