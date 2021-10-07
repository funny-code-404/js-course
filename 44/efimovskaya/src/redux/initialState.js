import { initialCommentsState } from '../ducks/comments/reducer';
import { initialPostsState } from '../ducks/posts/reducer';

const initialState = {
  posts: initialPostsState,
  comments: initialCommentsState,
};

export default initialState;
