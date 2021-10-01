// eslint-disable-next-line import/prefer-default-export
export const getPostsSelector = (state) => state.posts.data;
export const getPostsLoadingSelector = ((state) => state.posts.isFetching);
