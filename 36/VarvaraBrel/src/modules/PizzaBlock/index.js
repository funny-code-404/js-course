import OrderViewBlock from './OrderView/index';
import PictureBlock from './PicturePizza/index';
import ListBlock from './ListBlock/index';
import './style.scss';

class PizzaBlock {
  constructor(container) {
    this.render(container);
    container.id = 'pizza-app-wrapper';
  }
  render(container) {
    const renderOrderView = new OrderViewBlock(container);
    const renderPictureBlock = new PictureBlock(container);
    const renderListBlock = new ListBlock(container);
  }
}

export default PizzaBlock;
