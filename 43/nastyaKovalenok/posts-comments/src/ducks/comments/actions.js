import {ACTION_DATA_REQUESTED, ACTION_GET_DATA_FAILED, ACTION_GET_DATA_SUCCEED} from "../posts/actions";


export const getCommentsAction = (url) => async (dispatch) => {
    dispatch(ACTION_DATA_REQUESTED())
    try{
        const res = await fetch(url);
        const data = await res.json()

        dispatch(ACTION_GET_DATA_SUCCEED(data))

    }catch (error){

        dispatch(ACTION_GET_DATA_FAILED(error.message))
    }
}