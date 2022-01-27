import { createInstance } from "../instance";

const api = createInstance();

export const dogImageGet = async (breedName) => {
    const responce = await api.get(`/breed/${breedName}/images/random`);
    return responce;
}

export const randomDogImageGet = async () => {
    const responce = await api.get('/breeds/image/random');
    return responce;
}