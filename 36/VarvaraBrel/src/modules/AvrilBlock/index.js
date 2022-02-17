import { createAvatar } from './avatar/avatar';
import { createInfo } from './info/info.js';
import { createBio } from './bio/bio';
import { createSignature } from './sign/signature';
import './style.scss';

class AvrilBlock {
  constructor(container) {
    this.render(container);
    container.id = 'avril-wrapper';
  }

  render(container) {
    function createApp(container) {
      createAvatar(container);
      createInfo(container);
      createBio(container);
      createSignature(container);
    }

    new createApp(container);
  }
}

export default AvrilBlock;
