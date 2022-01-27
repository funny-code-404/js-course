// ACTIONconst
const SET_DATA = "SET_DATA";
const DELETE_SET_DATA = "DELETE_SET_DATA";
const EDIT_SET_DATA = "EDIT_SET_DATA";
const APPLY_SET_DATA = "APPLY_SET_DATA";
const SELECT_BORDER_DATA = "SELECT_BORDER_DATA";
// INITIAL
export const initialDataState = {
  data: [],
};

// ACTIONset----1
export const ACTION_SET_DATA = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};
//---------------2
export const ACTION_DELETE_SET_DATA = (payload) => {
  return {
    type: DELETE_SET_DATA,
    payload,
  };
};
// -------3
export const ACTION_EDIT_SET_DATA = (payload) => {
  return {
    type: EDIT_SET_DATA,
    payload,
  };
};
// -------4
export const ACTION_APPLY_SET_DATA = (payload) => {
  return {
    type: APPLY_SET_DATA,
    payload,
  };
};
// ------------
export const ACTION_SELECT_BORDER_DATA = (payload) => {
  return {
    type: SELECT_BORDER_DATA,
    payload,
  };
};
// SELECTORS
export const dataSelector = (state) => state.todo.data;
// REDUCER
export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case DELETE_SET_DATA: {
      return {
        ...state,
        data: state.data.filter((item, index) => index !== +action.payload),
      };
    }
    case EDIT_SET_DATA: {
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === +action.payload.id) {
            item.editStatus = !item.editStatus;
            return item;
          }
          return item;
        }),
      };
    }
    case APPLY_SET_DATA: {
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === +action.payload.id) {
            item.todoText = action.payload.newTodoText;
            item.editStatus = !item.editStatus;
            return item;
          }
          return item;
        }),
      };
    }
    case SELECT_BORDER_DATA: {
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === +action.payload.id) {
            item.selected = action.payload.value;
            return item;
          }
          return item;
        }),
      };
    }
    default:
      return { ...state };
  }
};
