export const GET_LIST_SUCCEED = 'GET_LIST_SUCCEED';
export const GET_LIST_FAILED = 'GET_LIST_FAILED';
export const GET_LIST_REQUESTED = 'GET_LIST_REQUESTED';

export const ACTION_GET_LIST_REQUESTED = () => {
  return {
    type: GET_LIST_REQUESTED,
  };
};

export const ACTION_GET_LIST_SUCCEED = (payload) => {
  return {
    type: GET_LIST_SUCCEED,
    payload,
  };
};

export const ACTION_GET_LIST_FAILED = (error) => {
  return {
    type: GET_LIST_FAILED,
    error,
  };
};
