import axios from 'axios';

import apiConfig from './config';

const createInstance = (config = {}) => {
  const newConfig = {
    ...apiConfig,
    ...config,
  };

  const instance = axios.create(newConfig);

  return instance;
};

export default createInstance;
