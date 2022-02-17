import { Base, Ing1, Ing2, Sauce } from '../constant/ingList';
import './style.scss';

class ListBlock {
  constructor(container) {
    return this.render(container);
  }
  render(container) {
    const el = document.createElement('div');
    el.id = 'listBlockWrapper';
    this.renderBase(el);
    this.renderIng1(el);
    this.renderIng2(el);
    this.renderSauce(el);
    container.appendChild(el);
  }

  renderBase(container) {
    const list = Base;
    const name = 'Основа';
    const render = this.renderList(list, name);
    container.append(render);
  }

  renderIng1(container) {
    const list = Ing1;
    const name = 'Ингредиент 1';
    const render = this.renderList(list, name);
    container.append(render);
  }

  renderIng2(container) {
    const list = Ing2;
    const name = 'Ингредиент 1';
    const render = this.renderList(list, name);
    container.append(render);
  }

  renderSauce(container) {
    const list = Sauce;
    const name = 'Соус';
    const render = this.renderList(list, name);
    container.append(render);
  }

  renderList(list, name) {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    div.classList.add('ListColumn');
    const h2 = document.createElement('h2');
    h2.innerHTML = name;
    h2.classList.add('ListName');
    Object.keys(list).forEach((el) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.classList.add('ButtonIng');
      button.innerText = list[el].name;
      li.appendChild(button);
      ul.appendChild(li);
    });
    div.append(h2, ul);
    return div;
  }
}

export default ListBlock;
