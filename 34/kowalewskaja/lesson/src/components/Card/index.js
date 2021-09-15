
import {BUTTON_TITLE} from './config';


import './styles';

class Card {
  constructor(header,text) {
      this.header = header;
      this.text = text;

      return this.render();
  }

  render() {
      const card = document.createElement('div');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const button = document.createElement('button');


      h1.innerHTML = this.header;
      p.innerHTML = this.text;
      button.innerHTML = BUTTON_TITLE;

      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(button);
      card.classList.add('card');

      return card;
  }
}

export default Card;
