import { useReducer } from "react";
import TodoListContext from "../context/createContext";
import reducer from "../reducers/todos";
import { actions, initialState } from "../actions/todos";


const TodoListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        todoList: state.todoList,
        addTodoItem: (todoItemLabel) => {
          dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
        },
        removeTodoItem: (todoItemId) => {
          dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
        },
        markAsCompleted: (todoItemId) => {
          dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
        }
      };

    return ( 
        <TodoListContext.Provider value={value}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;