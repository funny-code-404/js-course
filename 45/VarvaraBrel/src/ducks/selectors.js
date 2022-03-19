export const commentsSelector = (state) => state.comments.data;
export const isLoadingSelector = (state) => state.comments.isLoading;
export const errorSelector = (state) => state.comments.error;

export const singleCommentSelector = (state) => state.singleComment.data.body;
export const singleCommentIsLoadingSelector = (state) =>
  state.singleComment.isLoading;
export const singleCommentErrorSelector = (state) => state.singleComment.error;
