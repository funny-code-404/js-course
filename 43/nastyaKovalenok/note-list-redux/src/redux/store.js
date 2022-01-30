import {createStore} from "redux";
import {initialState, reducer} from "../ducks/NotesRedux/NoteRedux";

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducer, initialState, devToolsExtension())

export default store