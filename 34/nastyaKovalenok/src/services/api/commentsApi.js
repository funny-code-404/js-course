import createInstance from "../instance";
import {commentsDataFromServer} from "../utils/dataFromServer";
import {baseUrl} from "../constants";


const API = createInstance();

export const getAllComments = async() => {

    console.log(`${baseUrl}/comments`)
    const response =  await API.get(`${baseUrl}/users`);
   /* const response =  await API.get(`/comments`);*/
    return commentsDataFromServer(response)
}

export const getSingleComments = async (id) => {

    const response = await API.get(`${baseUrl}/users/${id}`);
    return response.data

    /*return await API.get(`/comments/${id}`)*/
}

