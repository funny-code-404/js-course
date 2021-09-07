import createInstance from '../instance';

import {
  buttonsFromServer,
  buttonFromServer
} from '../helpers/buttons';

const API = createInstance();

export const getButtons = async () => {
  const response = await API.get('/buttons');
  const data = buttonsFromServer(response);

  return data;
};

export const getButton = async (id) => {
  const response = await API.get(`/buttons/${id}`);
  const data = buttonFromServer(response);

  return data;
};

// {
//   color: 'red',
//   backGroundColor: 'yellow'
// }

// buttonToSever = (button) => ({
//  "background-color": button.backGroundColor,
// });

/*export const createButton = async (button) => {
  const response = await API.post('/buttons', button);
};*/