import { initialState } from "./initialState";
import { rootReducer } from "./rootReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  devToolsExtension()
);
