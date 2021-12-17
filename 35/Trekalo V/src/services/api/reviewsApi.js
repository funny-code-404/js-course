import createInstance from "../instance";
const API = createInstance();

export const getAllReviews = async () => {
  const response = await API.get("/");
  return reviewsDataFromServer(response);
};

export const postReviews = async (data) => {
  const response = await API.post("/", data);
  console.log(response);
  return response;
};

function reviewsDataFromServer(data) {
  return data.data.reviews;
}

export const deleteReview = async (id) => {
  const response = await API.delete("/", { data: { id } });
};
