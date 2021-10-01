import React from 'react';
import { useSelector } from 'react-redux';
import className from './Preloader.module.css';
import { getPostsLoadingSelector } from '../../ducks/posts/selectors';

const Preloader = () => {
  const isFetching = useSelector(getPostsLoadingSelector);
  return (
    <>
      { isFetching && (
      <div className={className.preloader}>
        Loading...
      </div>
)}
    </>
  );
};

export default Preloader;
