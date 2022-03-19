export const api = () => {
   const request = async (url, params = {}) => {
      const res = await fetch(url, params);
      const data = await res.json();
    
      return data;
   }
   const get = async (url) => {
      
      const data = await request(url, {
         method: 'GET',
      });
      return data;
   }
   return {get};
}