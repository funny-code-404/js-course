export const commentsDataFromServer = (response) =>
    response.data.map(({postId,body,...item})=>({
        ...item,
        text: body
    }));