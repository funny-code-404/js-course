import { app } from './App';

class JsProjectBlock {
  constructor(container) {
    this.init(container);
  }

  init(container) {
    this.render(container);
  }

  render(container) {
      class User {
        addJsProject () {
          app(container);
        }
      }
      const user = new User();
      user.addJsProject();
  }
}

export default JsProjectBlock;
