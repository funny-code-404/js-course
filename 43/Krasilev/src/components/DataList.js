/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../ducks/posts/actions';
import { getPostsSelector } from '../ducks/posts/selectors';

const DataList = ({ title, path }) => {
  const posts = useSelector(getPostsSelector);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getPostsAction(path));
  };
  return (
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>Fetch data</button>
    </div>
  );
};

export default DataList;
