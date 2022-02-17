import createInstance from '../instance';
import { imageFromServer } from '../utils/imageFromServer';

const API = createInstance();

export const getRandomImage = async () => {
  const response = await API.get('/api/breeds/image/random');
  return imageFromServer(response);
};

export const getAkitaImage = async () => {
  const response = await API.get('/api/breed/akita/images/random');
  return imageFromServer(response);
};

export const getChowImage = async () => {
  const response = await API.get('/api/breed/chow/images/random');
  return imageFromServer(response);
};

export const getBoxerImage = async () => {
  const response = await API.get('/api/breed/boxer/images/random');
  return imageFromServer(response);
};

export const getHuskyImage = async () => {
  const response = await API.get('/api/breed/husky/images/random');
  return imageFromServer(response);
};

export const getMixDogImage = async () => {
  const response = await API.get('/api/breed/mix/images/random');
  return imageFromServer(response);
};
