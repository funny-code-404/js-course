/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsSelector } from '../ducks/comments/selectors';
import { getCommentsAction } from '../ducks/comments/actions';

const CommentsList = ({ title, url }) => {
  const comments = useSelector(getCommentsSelector);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getCommentsAction(url));
  };
  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleClick} type="button">Fetch Comments</button>
      <ul>
        {comments.map((comment) => <li key={comment.id}>{comment.body}</li>)}
      </ul>
    </>
  );
};

export default CommentsList;
