export const getDataMiddleware = (store) => (dispatch) => (action) => {
  console.log('ACTION: ', action.type);

  dispatch(action);
};
