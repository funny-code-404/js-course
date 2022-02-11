export const GET_DATA_SUCCEED = 'GET_DATA_SUCCEED';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const DATA_REQUESTED = 'DATA_REQUESTED';

export const ACTION_GET_DATA_SUCCEED = (payload) => ({
    type: GET_DATA_SUCCEED,
    payload
})

export const ACTION_GET_DATA_FAILED = (error) => ({
    type: GET_DATA_FAILED,
    error
})

export const ACTION_DATA_REQUESTED = () => ({
    type: DATA_REQUESTED
})


export const getPostsAction = (url) => async (dispatch) => {
    dispatch(ACTION_DATA_REQUESTED())
    try{
        const res = await fetch(url);
        const data = await res.json()

        dispatch(ACTION_GET_DATA_SUCCEED(data))

    }catch (error){

        dispatch(ACTION_GET_DATA_FAILED(error.message))
    }
}