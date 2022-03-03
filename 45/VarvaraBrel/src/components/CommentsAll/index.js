import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCommentsAction } from '../../ducks/AllComments/actions';
import { commentsSelector } from '../../ducks/selectors';
import Loader from './Loader/index';
import ErrorMessage from './ErrorMessage/index';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {
  const { comments } = props;

  useEffect(() => {
    const { actionGetComments, url } = props;
    actionGetComments(url);
  }, []);

  return (
    <div>
      <Loader />
      <ErrorMessage />
      {comments.map((item) => (
        <div key={item.id}>
          <li>{item.body}</li>
          <Link to={`/${item.id}`}>More</Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: commentsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetComments: (url) => {
    dispatch(getCommentsAction(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
