export const api = () => {
  const request = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    return data;
  };

  const get = async (url) => {
    const data = await request(url, {
      method: 'GET',
    });

    return data;
  };

  return {
    get,
  };
};
