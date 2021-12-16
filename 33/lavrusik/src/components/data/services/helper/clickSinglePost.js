import { getSinglePost } from "../api/postsApi";
export async function clickSinglePost(e) {
			const dataPost = await getSinglePost(e.target.id)
			console.log(dataPost);
		}