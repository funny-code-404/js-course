import createInstance from '../instance';

import { inputsFromServer, inputFromServer } from '../helpers/inputs';

const API = createInstance();

export const getInputs = async () => {
	const response = await API.get('/inputs');

	const data = inputsFromServer(response);

	return data;
};

export const getInput = async (id) => {
	const response = await API.get(`/inputs/${id}`);

	const data = inputFromServer(response);

	return data;
};

/* export const createButton = async (button) => {
	const response = await API.post('/buttons', button);
};
 */