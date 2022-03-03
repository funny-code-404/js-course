export const GET_DATA_SUCCEED = 'GET_DATA_SUCCEED';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const GET_DATA_LOADING = 'GET_DATA_LOADING';

export const ACTION_GET_DATA_LOADING = () => ({
  type: GET_DATA_LOADING,
});

export const ACTION_GET_DATA_SUCCEED = (payload) => ({
  type: GET_DATA_SUCCEED,
  payload,
});

export const ACTION_GET_DATA_FAILED = (error) => ({
  type: GET_DATA_FAILED,
  error,
});

export const getCommentsAction = (url) => async (dispatch) => {
  dispatch(ACTION_GET_DATA_LOADING());
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(ACTION_GET_DATA_SUCCEED(data));
    })
    .catch((error) => {
      dispatch(ACTION_GET_DATA_FAILED(error));
    });
};
