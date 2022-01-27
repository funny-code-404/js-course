import {getCloneLi} from './getCloneNode.js';
import { changePrice } from './changePrice.js';
import { changeButton } from './button.js';
export let orderPizzaChild = [];
export function clickTarget(e) {
	const listOrderPizza = document.getElementById('listOrderPizza');
	orderPizzaChild = [...document.getElementById('listOrderPizza').children];
	if(orderPizzaChild.length && orderPizzaChild.find((item)=>item.id===e.target.id)){
		console.log('You try second click');
		return;
	}
	let parentTargetId = e.target.parentNode.id;
	listOrderPizza.append(getCloneLi(e));
	e.target.classList.add('activ');
	changePrice(e);
	changeButton();
	let parent = document.getElementById(e.target.parentNode.id);
	let parentTargetIdChild = [...document.getElementById(`${parentTargetId}`).children];
	if (parentTargetId === 'osnova' || parentTargetId === 'sauce') {
		if (parentTargetIdChild.find(item => item.classList.contains('activ'))) {
			parent.removeEventListener('click', clickTarget);
		}
	} else {
		if (parentTargetIdChild.filter(item => item.classList.contains('activ')).length>=2) {
			parent.removeEventListener('click', clickTarget);
		}
	}	
}