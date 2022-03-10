import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './rootReducer';
import initialState from './initialState';
import { rootSaga } from './rootSaga';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  devtoolsExtension()
);

const store = createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
