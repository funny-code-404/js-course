import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunkMiddlewares from 'redux-thunk';
import {initialState} from "./initialState";
import {rootReducer} from "./rootReducer";

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [thunkMiddlewares];
const enhancers = [reduxDevToolsExtension()];

const composedEnhancers = compose(applyMiddleware(...middlewares),...enhancers)

export const store = createStore(
    combineReducers({...rootReducer}),
    initialState,
    composedEnhancers
)




