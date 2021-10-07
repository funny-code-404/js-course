import { createSelector } from 'reselect';

export const commentsSelector = (state) => state.comments.data;

export const getCommentsSelector = createSelector(commentsSelector, (data) => {
  return data.map((item) => ({
    ...item,
    description: `${item.body} --- DESCRIPTION`,
  }));
});


export const getCommentsErrorSelector = (state) => state.comments.error;
