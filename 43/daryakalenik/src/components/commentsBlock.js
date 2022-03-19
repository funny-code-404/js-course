import { useDispatch, useSelector } from "react-redux";
import { ACTION_LOG_DATA } from "../ducks/comments/actions";

const CommentsBlock = () => {
  const comments = useSelector((state) => {
    return state.data.data;
  });
  console.log(comments);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ACTION_LOG_DATA());
  };
  return (
    <div>
      <ul>
        {comments?.map((comment, index) => (
          <li key={index}>{comment.body}</li>
        ))}
      </ul>
      <button onClick={handleClick}>CONSOLE LOG</button>
    </div>
  );
};

export default CommentsBlock;
