export const LOG_DATA = `LOG_DATA`;
export const ACTION_LOG_DATA = () => ({ type: LOG_DATA });

export const GET_COMMENTS_SUCCEEDED = "GET_COMMENTS_SUCCEEDED";
export const ACTION_GET_DATA_SUCCEEDED = (payload) => ({
  type: GET_COMMENTS_SUCCEEDED,
  payload,
});

export const GET_COMMENTS_FAILED = "GET_COMMENTS_FAILED";
export const ACTION_GET_COMMENTS_FAILED = (error) => ({
  type: GET_COMMENTS_FAILED,
  error,
});

export const GET_DATA_REQUESTED = "GET_DATA_REQUESTED";
export const ACTION_GET_DATA_REQUESTED = () => ({
  type: GET_DATA_REQUESTED,
});

// export const getCommentsAction = (payload) => ({
//   type: GET_COMMENTS_SUCCEEDED,
//   payload,
// });
