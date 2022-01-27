import createInstance from "../instance";
import {reviewsDataFromServer} from "../utils/dataFromServer";

const baseUrl = 'https://quiet-spire-94328.herokuapp.com/reviews'

const API = createInstance();

export const getAllReviews = async() => {
    console.log(`${baseUrl}`)
    const response =  await API.get(baseUrl);
    /* const response =  await API.get(`/comments`);*/
    return reviewsDataFromServer(response);
}

export const createReview = async(data) => {
    const response = await API.post(baseUrl,data);
    return reviewsDataFromServer(response);
}

export const deleteReview = async(id) =>{
    const response = await API.delete(baseUrl, { data: { id } });

    return reviewsDataFromServer(response);
}