// const app = new App(wrapper);
import { DataBlock } from "./components/dataBlock/index";
import AboutBlock from "./components/aboutBlock/index";
import { CV } from "/components/newsBlock/cv";
import { observer } from "./services/utils/observer";
import { DATA_RECEIVED } from "./services/constants";
import { Form } from "./components/contactsBlock/form";
import styles from "./styles/styles";

const APP_ROUTES = {
  news: `news`,
  about: `about`,
  comments: `comments`,
  contacts: `contacts`,
};

export class App {
  constructor(container) {
    return this.init(container);
  }
  renderNavigation(container) {
    const nav = document.createElement(`nav`);
    Object.keys(APP_ROUTES).forEach((route) => {
      const a = document.createElement(`a`);
      a.innerHTML = route.toUpperCase();
      a.href = `#`;
      a.id = APP_ROUTES[route];
      nav.appendChild(a);
    });

    nav.addEventListener(`click`, (e) => {
      if (e.target.tagName === `A`) {
        e.preventDefault();
        window.location.hash = e.target.id;
      } else {
        return;
      }
    });
    container.appendChild(nav);
  }

  renderNewsBlock(container) {
    const cv = new CV();
    container.appendChild(cv);
  }

  renderAboutBlock(container) {
    const about = new AboutBlock();
    container.appendChild(about);
  }

  renderCommentsBlock(container) {
    const commentsBlock = new DataBlock(container);
    return;
  }

  renderContactsBlock(container) {
    const form = new Form(container);
    return;
  }

  init(container) {
    window.onhashchange = () => {
      this.render(container);
    };

    observer.subscribe(DATA_RECEIVED, (state) => {
      this.render(container, state);
    });

    observer.subscribe("click", (state) => {
      this.render(container, state);
    });

    return this.render(container);
  }

  render(container) {
    console.log(`RENDER`);
    const el = document.createElement(`div`);
    el.classList.add(`another-container`);
    this.renderNavigation(el);

    switch (window.location.hash.slice(1)) {
      case APP_ROUTES.news:
        this.renderNewsBlock(el);
        console.log(el);
        break;
      case APP_ROUTES.about:
        this.renderAboutBlock(el);
        break;
      case APP_ROUTES.comments:
        this.renderCommentsBlock(el);
        break;
      case APP_ROUTES.contacts:
        this.renderContactsBlock(el);
      default:
    }
    container.innerHTML = ``;
    container.appendChild(el);
  }
}
