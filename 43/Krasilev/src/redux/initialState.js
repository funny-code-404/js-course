import { initialPostState } from '../ducks/posts/reducer';
import { initialCommentsState } from '../ducks/comments/reducer';

const initialState = {
  posts: initialPostState,
  comments: initialCommentsState,
};

export default initialState;
