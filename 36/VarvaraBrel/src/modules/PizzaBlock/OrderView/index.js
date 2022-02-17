import './style';

class OrderViewBlock {
  constructor(container) {
    return this.render(container);
  }
  render(container) {
    const el = document.createElement('div');
    el.id = 'order-view-wrapper';
    el.innerHTML =
      '<div id="order-area"><h2 id="order-texthead">Область просмотра заказа</h2><div id="order-view-list"><ul"></ul></div><p id="price">Цена: <span">0</span> $</p></div>';
    container.appendChild(el);
  }
}

export default OrderViewBlock;
