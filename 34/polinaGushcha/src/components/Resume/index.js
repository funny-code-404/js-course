import './styles/style';
import { personalInformation } from './personalInformation/index';
import { autobiography } from './autobiography/index';
import { addUserPhoto } from './userPhoto/index';

class ResumeBlock {
  constructor(container) {
    this.init(container);
  }

  init(container) {
    this.render(container);
  }

  render(container) {
    class User {
      addUserResume () {
        addUserPhoto(container);
        personalInformation(container);
        autobiography(container);
      }
    }
    const user = new User();
    user.addUserResume();
  }
}

export default ResumeBlock;