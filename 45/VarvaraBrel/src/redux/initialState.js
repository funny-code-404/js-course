import { initialCommentsState } from '../ducks/AllComments/reducer';
import { initialCommentSingleState } from '../ducks/SingleComments/reducer';

const initialState = {
  comments: initialCommentsState,
  singleComment: initialCommentSingleState,
};

export default initialState;
