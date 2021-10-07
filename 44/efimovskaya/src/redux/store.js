import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';
import initialState from './initialState';
import { getDataMiddleware } from './middlewares';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [getDataMiddleware, thunkMiddleware];
const enhansers = [devtoolsExtension()];

const composedEnhansers = compose(
  applyMiddleware(...middlewares),
  ...enhansers
);

export default createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  composedEnhansers
);
