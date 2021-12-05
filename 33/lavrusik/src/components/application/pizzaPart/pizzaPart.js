import renderIng1 from "./ing1Ul/ing1Ul";
import renderIng2 from "./ing2Ul/ing2Ul";
import renderOsnova from "./osnovaUl/osnovaUl";
import renderSauce from "./sauceUl/sauceUl";
function renderPizzaPart() {
	const pizzaPart = document.createElement('div');
	pizzaPart.className = 'pizzaPart';
	pizzaPart.appendChild(renderOsnova());
	pizzaPart.appendChild(renderIng1());
	pizzaPart.appendChild(renderIng2());
	pizzaPart.appendChild(renderSauce());
	return pizzaPart;
}
export default renderPizzaPart;