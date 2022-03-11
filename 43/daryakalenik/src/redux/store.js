import { applyMiddleware, createStore, compose } from "redux";
import initialState from "./initialState";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [thunk];
const enhancers = [devToolsExtension()];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
