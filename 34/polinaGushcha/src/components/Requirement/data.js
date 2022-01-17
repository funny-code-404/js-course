const url = 'https://jsonplaceholder.typicode.com/posts';

export async function dataFromServer()  {
    const response = await fetch(url);
    return await response.json();
}