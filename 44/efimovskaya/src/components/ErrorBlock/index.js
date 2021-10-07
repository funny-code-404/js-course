import { connect } from "react-redux";
import { getPostsErrorSelector } from "../../ducks/posts/selectors";
import { getCommentsErrorSelector } from "../../ducks/comments/selectors";

import "./styles.css";

const ErrorBoundary = ({ postsError, commentsError }) => {
  const error = postsError;
  const errorComments = commentsError;
  console.log(error);
  return (
    (error && <div className="error">{error}</div>) ||
    (errorComments && <div className="error">{errorComments}</div>)
  );
};

const mapStateToProps = (state) => ({
  postsError: getPostsErrorSelector(state),
  commentsError: getCommentsErrorSelector(state),
});

export default connect(mapStateToProps)(ErrorBoundary);

// import { useSelector  } from 'react-redux';
// import { getPostsErrorSelector } from '../../ducks/posts/selectors';

// import './styles.css';

// const ErrorBoundary = () => {
//   const postsError = useSelector(getPostsErrorSelector);

//   const error = postsError;

//   return error && <div className='error'>{error}</div>;
// };

// export default ErrorBoundary;
