import { createContext, useReducer } from 'react';

const InitialState = [];

export const ReducerContext = createContext(InitialState);

export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const ACTION_CREATE_TASK = (payload) => {
  return {
    type: CREATE_TASK,
    payload,
  };
};

export const ACTION_DELETE_TASK = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const ACTION_EDIT_TASK = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((el) => el.id != action.payload);
    case EDIT_TASK:
      const result = state.map((el) => {
        if (el.id == action.payload.id) {
          return { id: el.id, text: action.payload.text };
        } else {
          return el;
        }
      });
      return result;
    default:
      return state;
  }
};

export const ReducerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
