export const GET_DATA_LIST_REQUESTED = 'GET_DATA_LIST_REQUESTED';
export const GET_DATA_LIST_SUCCEED = 'GET_DATA_LIST_SUCCEED';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export const ACTION_GET_DATA_LIST_REQUESTED = (payload) => {
    return {
        type: GET_DATA_LIST_REQUESTED,
        payload
    }
}

export const ACTION_GET_DATA_LIST_SUCCEED = (payload) => {
    return {
        type: GET_DATA_LIST_SUCCEED,
        payload
    }
}

export const ACTION_GET_DATA_FAILED = (payload) => {
    return {
        type: GET_DATA_FAILED,
        payload
    }
}