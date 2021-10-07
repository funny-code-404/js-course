import { createSelector } from 'reselect';

export const postsSelector = (state) => state.posts.data;

export const getPostsSelector = createSelector(postsSelector, (data) => {
  return data.map((item) => ({
    ...item,
    description: `${item.title} --- DESCRIPTION`,
  }));
});


export const getPostsErrorSelector = (state) => state.posts.error;
