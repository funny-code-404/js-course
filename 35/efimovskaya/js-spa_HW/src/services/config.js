import {
  baseURL
} from './constants';

const apiConfig = {
  baseURL, // библиотека axios требует базовый урл, к которому крепим endpoints
  headers: {
    'Content-type': 'application/json',
  },
};

export default apiConfig;