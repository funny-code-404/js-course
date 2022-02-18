import AvrilBlock from '../AvrilBlock/index.js';
import PizzaBlock from '../PizzaBlock/index.js';
import UserDataBlock from '../UserDataBlock/index.js';
import FormBlock from '../FormBlock/index.js';
import './style.scss';

const APP_ROUTES = {
  AvrilBlock: 'Avril Lavign',
  PizzaBlock: 'Pizza Order',
  UserDataBlock: 'User Data',
  FormBlock: 'User Form',
};

class NavigationBlock {
  constructor(container) {
    return this.render(container);
  }

  render(container) {
    const el = document.createElement('div');
    this.renderNavigation(el);
    const elBlock = document.createElement('div');

    switch (window.location.hash.slice(1)) {
      case Object.keys(APP_ROUTES)[0]:
        this.renderAvrilBlock(elBlock);
        break;
      case Object.keys(APP_ROUTES)[1]:
        this.renderPizzaBlock(elBlock);
        break;
      case Object.keys(APP_ROUTES)[2]:
        this.renderUserDataBlock(elBlock);
        break;
      case Object.keys(APP_ROUTES)[3]:
        this.renderFormBlock(elBlock);
        break;
      default:
    }
    container.innerText = '';
    container.append(el, elBlock);
  }

  renderAvrilBlock(container) {
    const el = new AvrilBlock(container);
  }

  renderPizzaBlock(container) {
    const el = new PizzaBlock(container);
  }

  renderUserDataBlock(container) {
    const el = new UserDataBlock(container);
  }

  renderFormBlock(container) {
    const el = new FormBlock(container);
  }
  renderNavigation(container) {
    const nav = document.createElement('nav');

    Object.keys(APP_ROUTES).forEach((route) => {
      const a = document.createElement('a');
      a.innerHTML = APP_ROUTES[route].toUpperCase('a');
      a.href = '#';
      a.id = route;

      nav.appendChild(a);
    });

    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        window.location.hash = e.target.id;
      } else {
        return;
      }
    });
    container.appendChild(nav);
    return container;
  }
}

export default NavigationBlock;
