const url = 'https://jsonplaceholder.typicode.com/users';

export async function getData ()  {
    const response = await fetch(url);
    return await response.json()
}
