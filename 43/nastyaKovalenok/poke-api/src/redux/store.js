import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import {initialState} from "./initialState";
import {rootReducer} from "./rootReduser";
import rootSaga from "./rootSaga";


const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];
const enhancers = [devToolsExtension()]

const composedEnhancers = compose(applyMiddleware(...middlewares),...enhancers)

const store = createStore(combineReducers({...rootReducer}),initialState, composedEnhancers)

sagaMiddleware.run(rootSaga);

export default store