import axios from 'axios';
import { defaultConfig } from './defaultConfig';

const createInstance = (config = {}) => {
  const newConfig = {
    ...defaultConfig,
    ...config,
  };
  const instance = axios.create(newConfig);
  return instance;
};

export default createInstance;
