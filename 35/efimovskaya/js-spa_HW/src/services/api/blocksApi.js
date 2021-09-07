import createInstance from '../instance';

import {
  blocksFromServer,
  blockFromServer
} from '../helpers/blocks';

const API = createInstance();

export const getBlocks = async () => {
  const response = await API.get('/blocks');
  const data = blocksFromServer(response);
  
 //console.log(data.data[0].width);
  return data;
};

export const getBlock = async (id) => {
  const response = await API.get(`/blocks/${id}`);
  const data = blockFromServer(response);

  return data;
};

/*
export const createBlock = async (block) => {
  const response = await API.post('/blocks', block);
  return response;
};*/