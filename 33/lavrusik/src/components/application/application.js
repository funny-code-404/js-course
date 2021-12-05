import { main } from "../../app";
import renderOrder from "./order/order";
import renderPizzaPart from "./pizzaPart/pizzaPart";
import {clickTarget,} from './utils/clickTarget.js';
import { clickOrder } from './utils/clickOrder.js';
class Application{
	constructor() {
		return this.init();
	}
	init() {
		this.render();
		const listOrderPizza = document.getElementById('listOrderPizza');
 		const osnova = document.getElementById('osnova');
		const ing1 = document.getElementById('ing1');
 		const ing2 = document.getElementById('ing2');
 		const sauce = document.getElementById('sauce');
 		const buttonToOrder = document.getElementById('to_order');
		buttonToOrder.disabled = true;
		sauce.addEventListener('click', clickTarget);
		ing2.addEventListener('click',clickTarget);
		ing1.addEventListener('click', clickTarget);
		osnova.addEventListener('click',clickTarget);
		listOrderPizza.addEventListener('click', clickOrder);
		let dialog = document.querySelector('dialog');
		document.querySelector('#to_order').addEventListener('click',function() {
  		dialog.show();
		});
		document.querySelector('#close').addEventListener('click',function() {
  		dialog.close();
		});
}
	render() {
		const article = document.createElement('article');
		article.className = 'applicationJs';
		article.appendChild(renderOrder());
		const buttonWrapper = document.createElement('div');
		buttonWrapper.className = 'button-wrapper';
		const buttonToOrder = document.createElement('button');
		buttonToOrder.id = 'to_order';
		buttonToOrder.className = 'btn';
		buttonToOrder.innerText = 'Заказать';
		buttonWrapper.appendChild(buttonToOrder);
		article.appendChild(buttonWrapper);
		article.appendChild(renderPizzaPart());
		const dialog = document.createElement('dialog');
		const p = document.createElement('p');
		p.innerText = 'Ваш заказ принят!!';
		dialog.appendChild(p);
		const buttonToClose = document.createElement('button');
		buttonToClose.id = 'close';
		buttonToClose.className = 'btn_close';
		buttonToClose.innerText = 'Закрыть';
		dialog.appendChild(buttonToClose);
		article.appendChild(dialog);		
		main.appendChild(article);
	}
}
export default Application;