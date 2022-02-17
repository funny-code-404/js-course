import createInstance from '../instance';
import { reviewsDataFromServer } from './utils/reviewsData';

const API = createInstance();

export const getAllReviews = async () => {
  const response = await API.get(
    'https://quiet-spire-94328.herokuapp.com/reviews/'
  );
  return reviewsDataFromServer(response);
};

export const postReview = async (data) => {
  const response = await API.post(
    'https://quiet-spire-94328.herokuapp.com/reviews/',
    data
  );

  return response;
};

export const deleteReview = async (id) => {
  const response = await API.delete(
    'https://quiet-spire-94328.herokuapp.com/reviews/',
    { data: { id } }
  );
};
