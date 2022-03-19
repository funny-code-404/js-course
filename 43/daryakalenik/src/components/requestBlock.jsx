import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../ducks/comments/asyncActions/comments";
const RequestBlock = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchComments());
  };
  return (
    <div>
      <p>Request block</p>
      <button onClick={handleClick}>Get comments</button>
    </div>
  );
};

export default RequestBlock;
