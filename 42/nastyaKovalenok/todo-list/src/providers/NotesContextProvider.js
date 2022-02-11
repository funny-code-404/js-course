import React, {useReducer} from "react";

const initialState = [];

export const ReducerContext = React.createContext(initialState);

export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = 'DELETE_NOTE';

export const ACTION_CREATE_NOTE = (payload) => {
    return {
        type: CREATE_NOTE,
        payload
    }
}

export const ACTION_DELETE_NOTE = (payload) => {

    return {
        type: DELETE_NOTE,
        payload
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return ([
                ...state,
                {
                    value: action.payload,
                    id: state.length + 1
                }
            ]);
        case DELETE_NOTE:
            return ([
                ...state.filter((item)=>item.id !== action.payload)
            ])
        default:
            return state
    }
}


export const ReducerContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <ReducerContext.Provider value={{state, dispatch}}>
        {children}
    </ReducerContext.Provider>
}

