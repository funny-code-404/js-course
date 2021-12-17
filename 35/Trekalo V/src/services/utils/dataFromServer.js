export const commentsDataFromServer = (response) =>
  response.data.map(({ postId, body, ...rest }) => ({
    ...rest,
    text: body,
  }));
