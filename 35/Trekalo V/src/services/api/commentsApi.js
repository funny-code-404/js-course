import createInstance from "../instance";
import { commentsDataFromServer } from "../utils/dataFromServer";
const API = createInstance();

export const getAllComments = async () => {
  const response = await API.get("/comments");
  return commentsDataFromServer(response);
};

export const getSingleComment = async (id) => {
  const response = await API.get(`/comments/${id}`);
  return parseSingleComment(response);
};
function parseSingleComment(n) {
  return [n.data].map(({ postId, body, ...item }) => item)[0];
}
// body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// email: "Eliseo@gardner.biz"
// id: 1
// name: "id labore ex et quam laborum"
// postId: 1
