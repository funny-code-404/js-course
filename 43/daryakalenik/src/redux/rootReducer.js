import { combineReducers } from "redux";
import { commentsReducer } from "../ducks/comments/reducer";

const rootReducer = combineReducers({ data: commentsReducer });

export default rootReducer;
