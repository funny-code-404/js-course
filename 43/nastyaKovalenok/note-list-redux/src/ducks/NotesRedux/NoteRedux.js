export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const OPEN_WINDOW_FOR_EDIT = 'OPEN_WINDOW_FOR_EDIT'
export const PRIORITY_SELECTION = 'PRIORITY_SELECTION'

export const initialState = [];

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

export const ACTION_EDIT_NOTE = (payload) => {
    return {
        type: EDIT_NOTE,
        payload
    }
}

export const ACTION_OPEN_WINDOW_FOR_EDIT = (payload) => {
    return {
        type: OPEN_WINDOW_FOR_EDIT,
        payload
    }
}

export const ACTION_PRIORITY_SELECTION = (payload) => {
    return {
        type: PRIORITY_SELECTION,
        payload
    }
}

export const notesSelector = state => state;

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return ([
                ...state,
                {
                    value: action.payload,
                    id: state.length + 1,
                    isShowEdit: false,
                    priority: ''
                }
            ]);
        case DELETE_NOTE:
            return ([
                ...state.filter((item) => item.id !== action.payload)
            ]);
        case OPEN_WINDOW_FOR_EDIT:
            return ([
                ...state.map((item) => {
                        if (item.id === action.payload) {
                            item.isShowEdit = !item.isShowEdit
                        }
                        return item
                    }
                ),
            ]);
        case EDIT_NOTE:
            return ([
                ...state.map((item) => {
                        if (item.id === action.payload.id) {
                            item.value = action.payload.value
                        }
                    return item
                    }
                ),
            ]);
        case PRIORITY_SELECTION:
            return ([
                ...state.map((item) => {
                        if (item.id === action.payload.id) {
                            item.priority = action.payload.value
                        }
                        return item
                    }
                ),
            ])
        default:
            return state
    }
}
