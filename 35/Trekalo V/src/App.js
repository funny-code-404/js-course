import Nav, { APP_ROUTES } from "./components/Navigation/index.js";
import AboutBlock from "./components/AboutBlock/index.js";
import { wrapperMaker } from "./components/NewsBlock/script.js";
import DataBlock from "./components/DataBlock/index.js";

class App {
  constructor(container) {
    return this.init(container);
  }
  renderNewsBlock(container) {
    const news = wrapperMaker();
    container.appendChild(news);
  }

  renderDataBlock(container) {
    const data = new DataBlock(container);
  }

  renderAboutBlock(container) {
    const about = new AboutBlock();
    container.appendChild(about);
  }

  init(container) {
    // всю инициализирующую работу некосающеюся RENDER-a
    // обработчики
    // прочая работа
    window.onhashchange = () => {
      this.render(container);
    };
    return this.render(container);
  }
  render(container) {
    // перемещение   компонента в реальный DOM
    const el = document.createElement("div");
    new Nav(el);

    switch (window.location.hash.slice(1)) {
      case APP_ROUTES.news:
        this.renderNewsBlock(el);
        break;
      case APP_ROUTES.data:
        this.renderDataBlock(el);
        break;
      case APP_ROUTES.about:
        this.renderAboutBlock(el);
        break;
    }

    container.innerHTML = ""; //
    container.appendChild(el);
  }
}

export default App;
