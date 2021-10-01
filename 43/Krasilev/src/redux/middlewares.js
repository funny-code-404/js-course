const getDataMiddleWare = (store) => (dispatch) => (action) => {
  // console.log(action.type);
  dispatch(action);
};

export default getDataMiddleWare;
