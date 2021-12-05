import img1 from "../image/image_part_001";
import img2 from "../image/image_part_002";
import img3 from "../image/image_part_003";
import img4 from "../image/image_part_004";
const img = [img1, img2, img3, img4];

function renderOrder() {
	const order = document.createElement('section');
	order.className = 'order';
	const imagePizza = document.createElement('div');
	order.appendChild(imagePizza);
	imagePizza.id = 'image_pizza';
	imagePizza.className = 'image_pizza';
	for (let i = 1; i <= 4; i++) {
		const image = document.createElement('img');
		image.className = `img_pizza_part${i}`;
		image.src = img[i-1];
		imagePizza.appendChild(image);
	};
	const orderPizza = document.createElement('div');
	order.appendChild(orderPizza);
	orderPizza.className = 'orderPizza';
	const listOrder = document.createElement('ul');
	orderPizza.appendChild(listOrder);
	listOrder.id = 'listOrderPizza';
	listOrder.className = 'listOrderPizza';
	const price = document.createElement('span');
	price.innerHTML = 'Цена:';
	orderPizza.appendChild(price);
	const priceWrapper = document.createElement('span');
	priceWrapper.id = 'priceWrapper';
	priceWrapper.innerHTML = '0$';
	orderPizza.appendChild(priceWrapper);
	return order;
}
export default renderOrder;