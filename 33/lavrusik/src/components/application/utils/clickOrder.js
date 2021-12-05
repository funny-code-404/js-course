import {clickTarget} from "./clickTarget.js";
import { changePrice } from "./changePrice.js";
import { changeButton } from "./button.js";
import { changeImg } from "./changeImg.js";
export function clickOrder(e) {
	const targetOrder = e.target.id;
	changePrice(e);
	e.target.remove();
	changeImg(false);
	changeButton();
	const liActiv = document.getElementById(`${targetOrder}`);
	const parent = document.getElementById(`${liActiv.parentNode.id}`);
	liActiv.classList.remove('activ');
	parent.addEventListener('click', clickTarget);
}