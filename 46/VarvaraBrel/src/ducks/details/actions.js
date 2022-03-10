export const GET_DETAILS_SUCCEED = 'GET_DETAILS_SUCCEED';
export const GET_DETAILS_FAILED = 'GET_DETAILS_FAILED';
export const GET_DETAILS_REQUESTED = 'GET_DETAILS_REQUESTED';

export const ACTION_GET_DETAILS_REQUESTED = () => {
  return {
    type: GET_DETAILS_REQUESTED,
  };
};

export const ACTION_GET_DETAILS_SUCCEED = (payload) => {
  return {
    type: GET_DETAILS_SUCCEED,
    payload,
  };
};

export const ACTION_GET_DETAILS_FAILED = (error) => {
  return {
    type: GET_DETAILS_FAILED,
    error,
  };
};
