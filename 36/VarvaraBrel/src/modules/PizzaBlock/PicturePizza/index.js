import pizzaSlice0 from '../assets/slice4.png';
import './style.scss';

class PicturePizzaBlock {
    constructor(container) {
        this.render(container)
    }
    render(container) {
        const divWrapper = document.createElement('div');
        divWrapper.id = 'picture-wrapper';

        const img = document.createElement('img');
        img.src = pizzaSlice0;
        img.id = 'pizza-image';

        const btn = document.createElement('button');
        btn.innerText = 'Заказать';
        btn.id = 'button-order';

        divWrapper.append(img, btn);
        container.append(divWrapper);
    }
}

export default PicturePizzaBlock;