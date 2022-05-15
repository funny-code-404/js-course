const SET_TASK = 'SET_TASK';
const DELETE_TASK = 'DELETE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const ADD_PRIORITY = 'ADD_PRIORITY';

export const ACTION_SET_TASK = (payload) => ({
  type: SET_TASK,
  payload,
});

export const ACTION_DELETE_TASK = (payload) => ({
  type: DELETE_TASK,
  payload,
});

export const ACTION_EDIT_TASK = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const ACTION_ADD_PRIORITY = (payload) => ({
  type: ADD_PRIORITY,
  payload,
});

export const getValueSelector = (state) => state.todo.values;

export const initialFormState = { values: [] };

export const todoReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        values: [...state.values, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        values: state.values.filter((el) => el.id !== action.payload.id),
      };
    case EDIT_TASK:
      const { payload: item } = action;
      return {
        ...state,
        values: state.values.map((el) => {
          if (el.id === item.id) {
            return { ...el, text: item.text };
          }
          return el;
        }),
      };
    case ADD_PRIORITY:
      const { payload: priorItem } = action;
      return {
        ...state,
        values: state.values.map((el) => {
          if (el.id === priorItem.id) {
            return { ...el, priority: priorItem.priority };
          }
          return el;
        }),
      };
    default:
      return { ...state };
  }
};
