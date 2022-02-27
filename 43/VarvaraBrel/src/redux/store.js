import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import rootReducer from './rootReducer';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export default createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  devtoolsExtension()
);
