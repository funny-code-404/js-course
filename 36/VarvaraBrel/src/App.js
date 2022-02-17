import NavigationBlock from './modules/NavigationBlock/index.js';

class App {
  constructor(container) {
    return this.init(container);
  }
  init(container) {
    window.onhashchange = () => {
      this.render(container);
    };
    return this.render(container);
  }

  render(container) {
    const renderNavigation = new NavigationBlock(container);
    return renderNavigation;
  }
}

export default App;
