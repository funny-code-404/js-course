import {changeImg} from './changeImg.js';
const price = {
    osnova_1:10,
    osnova_2:12,
    osnova_3:14,
    osnova_4:16,
    ing1_1:2,
    ing1_2:4,
    ing1_3:6,
    ing1_4:8,
    ing2_1:1,
    ing2_2:3,
    ing2_3:5,
    ing2_4:7,
    sauce_1:2,
    sauce_2:4,
    sauce_3:5,
    sauce_4:3,
}
let priceOrder = 0;
export function changePrice(e) {
	const target_id = e.target.id;
    if(e.target.parentNode.id === 'listOrderPizza'){
        priceOrder = priceOrder - price[target_id];
    } else {
        priceOrder = priceOrder + price[target_id];
        changeImg(true);
    }
	priceWrapper.textContent = `${priceOrder}$`;
}
