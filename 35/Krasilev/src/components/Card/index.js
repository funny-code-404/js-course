import { claculateSumm } from './helpers';

import { BUTTON_TITLE } from './config';

import './styles';

class Card {
  constructor() {
    return this.render();
  }

  render() {
    const card = document.createElement('div');

    card.innerHTML = 'CARD';

    return card;
  }
}

export default Card;
