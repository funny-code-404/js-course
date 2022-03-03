import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleCommentAction } from '../../ducks/SingleComments/actions';
import { singleCommentSelector } from '../../ducks/selectors';
import { useEffect } from 'react';
import Loader from './Loader/index';
import ErrorMessage from './ErrorMessage/index';

const SingleComment = (props) => {
  const params = useParams();

  useEffect(() => {
    const { actionGetComment, url } = props;
    const urlId = url + '/' + params.id;
    actionGetComment(urlId);
  }, []);

  const { singleComment } = props;

  return (
    <>
      <Loader />
      <ErrorMessage />
      <div>Extra info: {singleComment}</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  singleComment: singleCommentSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetComment: (url) => {
    dispatch(getSingleCommentAction(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleComment);
