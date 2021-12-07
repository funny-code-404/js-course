import createInstance from "../instance";

const api = createInstance();

export const getAllPosts = async () => {
	const response = await api.get('/posts');
		return postsData(response);
 };
export const getSinglePost = async (id) => {
	const response = await api.get(`/posts/${id}`);
	return response.data;
 };
const postsData = response =>
	response.data.map(({ body, ...rest }) => ({
		...rest,
		textPost: body,
	}));






