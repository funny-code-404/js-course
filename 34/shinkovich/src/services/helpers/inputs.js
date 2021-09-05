export const inputsFromServer = (inputs) => ({
	data: inputs?.data || inputs,
	statusText: inputs?.status_text || inputs?.statusText,
});

export const inputsToServer = (inputs) => inputs;

export const inputFromServer = (input) => ({
	data: input?.data || input,
	statusText: input?.status_text || input?.statusText,
});

export const inputToServer = (input) => input;
