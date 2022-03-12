import { combineReducers } from "redux";
import { examplesReducer } from "../ducks/examplesHTMLElement/reducer";
export default combineReducers({
  examples: examplesReducer,
});
