export const commentsDataFromServer = (response) =>
  response.data
    .map(({ postId, body, ...item }) => ({ ...item, text: body }))
    .slice(0, 50);

export function reviewsDataFromServer(data) {
  return data.data.reviews;
}
