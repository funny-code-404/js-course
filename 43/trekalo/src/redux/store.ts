import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState } from "./intialState";
import rootReducer from "./rootReducer";

const middleWares = [ThunkMiddleware];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);
