const initState = {
    todos: [],
  };
  
  export const addTodo = (state = initState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: state.todos.concat(action.payload)};
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo, i) => i !== action.payload)
        }
      case "DELETE_ALL":
        return { ...state, todos: []};
      default:
        return state;
    }
  };