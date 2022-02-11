import {postsReducer} from "../ducks/posts/reducers";
import {commentsReducer} from "../ducks/comments/reducers";

export const rootReducer = {
    posts: postsReducer,
    comments: commentsReducer
}