import { commentsReducer } from '../ducks/AllComments/reducer';
import { commentsSingleReducer } from '../ducks/SingleComments/reducer';

const rootReducer = {
  comments: commentsReducer,
  singleComment: commentsSingleReducer,
};

export default rootReducer;
