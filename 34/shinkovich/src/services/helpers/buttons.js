export const buttonsFromServer = (buttons) => ({
	data: buttons?.data || buttons,
	statusText: buttons?.status_text || buttons?.statusText,
});

export const buttonsToServer = (buttons) => buttons;

export const buttonFromServer = (button) => ({
	data: button?.data || button,
	statusText: button?.status_text || button?.statusText,
});

export const buttonToServer = (button) => button;
