import {
 createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import initialState from './initialState';
import getDataMiddleWare from './middlewares';

// eslint-disable-next-line no-underscore-dangle
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [getDataMiddleWare, thunk];
const enhasers = [devToolsExtension()];

const composedEnhasers = compose(applyMiddleware(...middlewares), ...enhasers);

export default createStore(combineReducers({ ...rootReducer }, initialState), composedEnhasers);
