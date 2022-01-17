import createInstance from "../instance";
import { reviewsDataFromServer } from "../utils/dataFromServer";

const API = createInstance();

export const getAllReviews = async () => {
  const response = await API.get("/");
  return reviewsDataFromServer(response);
};

export const createReviews = async (data) => {
  const response = await API.post("/", data);
  console.log(response);
  return response;
};

export const deleteReview = async (id) => {
  const response = await API.delete("/", { data: { id } });
};
