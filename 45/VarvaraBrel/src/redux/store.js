import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import initialState from './initialState';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const composedEnhancers = compose(applyMiddleware(thunk), devtoolsExtension());

export default createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  composedEnhancers
);
