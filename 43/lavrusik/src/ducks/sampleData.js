const SET_DATA = 'SET_DATA';
const DELETE_DATA = 'DELETE_DATA';

export  const ACTION_SET_DATA =(data)=> ({
    type: SET_DATA,
    payload:data,
})
export const ACTION_DELETE_DATA = (data)=> ({
    type: DELETE_DATA,
    payload:data,
})
export const initialState = {
    data: [],
};
export const dataSelector = state => state.data;

export const dataReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data:[...state.data,action.payload],
            }
        case DELETE_DATA:
            return {
               data:action.payload,
            }
        default:
            return {
                ...state,
            }
   }
};

