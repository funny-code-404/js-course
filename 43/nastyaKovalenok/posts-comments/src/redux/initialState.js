import {initialPostsState} from "../ducks/posts/reducers";
import {initialCommentsState} from "../ducks/comments/reducers";

export const initialState = {
    posts: initialPostsState,
    comments: initialCommentsState
}
