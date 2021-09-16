import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

import observer from './utils/observer';
import { createElement } from './components/helpFunctions/createElement';

const APP_ROUTES = {
  news: 'news',
  about: 'about',
  contacts: 'contacts',
};

class App {
  constructor(container) {
    return this.init(container);
  }

  renderNavigation(container) {
    const nav = createElement('nav', 'navigation');

    Object.keys(APP_ROUTES).forEach((route) => {
      const a = document.createElement('a');
      a.innerHTML = route.toUpperCase();
      a.href = '#';
      a.id = APP_ROUTES[route];

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
  }

  renderNewsBlock(container) {
    const el = document.createElement('div');
    el.appendChild(new Header());

    container.appendChild(el);
  }

  renderAboutBlock(container) {
    const el = document.createElement('div');
    el.appendChild(new Card());

    container.appendChild(el);
  }

  renderContactsBlock(container) {
    const el = document.createElement('div');
    el.appendChild(new Form());

    container.appendChild(el);
  }

  renderHomePage(container) {
    const el = document.createElement('div');
    el.innerHTML = 'HOME';

    container.appendChild(el);
  }

  init(container) {
    window.onhashchange = () => this.render(container);

    observer.subscribe('ondatareceived', (state) => {
      console.log(state);
    });

    return this.render(container);
  }

  render(container) {
    const app = document.createElement('div');
    this.renderNavigation(app);

    switch (window.location.hash.slice(1)) {
      case APP_ROUTES.news:
        this.renderNewsBlock(app);
        break;
      case APP_ROUTES.about:
        this.renderAboutBlock(app);
        break;
      case APP_ROUTES.contacts:
        this.renderContactsBlock(app);
        break;
      default:
        this.renderHomePage(app);
    }

    container.innerHTML = '';
    container.appendChild(app);
  }
}

export default App;

// 1. переопределить поведение внутренних ссылок навигации
// 2. подписаться на изменения адресной строки
// 3. в зависимсоти от урла - генерировать контент
