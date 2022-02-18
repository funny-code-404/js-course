export const dataResponse = (response) =>
  response.data.map(({ postId, body, ...rest }) => ({
    ...rest,
    text: body,
  }));
