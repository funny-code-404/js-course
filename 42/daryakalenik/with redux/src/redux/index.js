import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = { todos: [`Learn Redux`] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((el, index) => index !== +action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
