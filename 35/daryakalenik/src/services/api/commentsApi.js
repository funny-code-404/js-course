import createInstance from "../instance";
import {
  commentsDataFromServer,
  singleCommentDataDFromServer,
} from "../utils/dataFromServer";

const API = createInstance();

export const getAllComments = async () => {
  const response = await API.get(`/comments`);
  return commentsDataFromServer(response);
};

export const getSingleComment = async (id) => {
  const response = await API.get(`/comments/${id}`);
  return response.data;
};
