import { useReducer, createContext } from 'react';

// initial state
export const initialState = {
  data: [],
};

// Context for global store
export const Context = createContext(initialState);

// ACTION_TYPES
// ACTION_CREATORS
export const CREATE_TODO = 'CREATE_TODO';
export const ACTION_CREATE_TODO = (data) => ({
  type: CREATE_TODO,
  payload: data,
});

export const DELETE_TODO = 'DELETE_TODO';
export const ACTION_DELETE_TODO = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

// REDUCER
export const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
};

const DataWithReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default DataWithReducer;
