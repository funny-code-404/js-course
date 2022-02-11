import { createStore } from "redux";
import { dataReducer } from "../ducks/sampleData";
import { initialState } from "../ducks/sampleData";

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
export const store = createStore(dataReducer,initialState,devtoolsExtension());

