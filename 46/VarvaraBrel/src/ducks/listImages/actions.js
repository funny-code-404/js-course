export const GET_IMAGE_SUCCEED = 'GET_IMAGE_SUCCEED';
export const GET_IMAGE_FAILED = 'GET_IMAGE_FAILED';
export const GET_IMAGE_REQUESTED = 'GET_IMAGE_REQUESTED';

export const ACTION_GET_IMAGE_REQUESTED = () => {
  return {
    type: GET_IMAGE_REQUESTED,
  };
};

export const ACTION_GET_IMAGE_SUCCEED = (payload) => {
  return {
    type: GET_IMAGE_SUCCEED,
    payload,
  };
};

export const ACTION_GET_IMAGE_FAILED = (error) => {
  return {
    type: GET_IMAGE_FAILED,
    error,
  };
};
