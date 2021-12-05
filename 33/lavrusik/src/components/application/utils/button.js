import { arrClassNameListOrder } from './changeImg.js';
export function changeButton() {
	const buttonToOrder = document.getElementById('to_order');
	buttonToOrder.disabled = arrClassNameListOrder.filter((item, index) => arrClassNameListOrder.indexOf(item) === index).length !== 4;
}





