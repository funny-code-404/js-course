import { defaultConfig } from "./defaultConfig";
import axios from 'axios';
export const createInstance = (config = {}) => {
    const newConfig = {
        ...defaultConfig,
        ...config,
    }
    const instance = axios.create(newConfig);
    return instance;  
}



