//import { claculateSumm } from './helpers';
import {
  getBlocks
} from '@services/blocksApi';
import {
  getButtons
} from '@services/buttonsApi';
import {
  getInputs
} from '@services/inputsApi';
import {
  createElement
} from '../helpFunctions/createElement';

import {
  addStyles
} from '../helpFunctions/addStyles'

import observer from '../../utils/observer';

import './styles';

class Card {
  constructor() {
    return this.render();
  }

  async getDataBlocks() {
    const data = await getBlocks();
    observer.state = data;
    observer.notify('ondatareceived');
    return data;
  }

  async getDataButtons() {
    const data = await getButtons();
    observer.state = data;
    observer.notify('ondatareceived');
    return data;

  }

  async getDataInputs() {
    const data = await getInputs();
    observer.state = data;
    observer.notify('ondatareceived');
    return data;

  }

  render() {
    const card = createElement('div', 'card__container');

    const containerForBtns = createElement('div', 'card__container-for-buttons');
    const containerForRealization = createElement('div', 'card__container-for-realization');
    const containerForSomething = createElement('div', 'card__container-for-something');

    //containerForRealization.innerHTML = 'Realization';
    containerForSomething.innerHTML = "Something";

    const blocksAddBtn = createElement('button', 'card__blocks-add-btn');
    const buttonsAddBtn = createElement('button', 'card__buttons-add-btn');
    const inputsAddBtn = createElement('button', 'card__inputs-add-btn');

    blocksAddBtn.innerHTML = 'Blocks';
    buttonsAddBtn.innerHTML = 'Buttons';
    inputsAddBtn.innerHTML = 'Inputs';

    containerForBtns.appendChild(blocksAddBtn);
    containerForBtns.appendChild(buttonsAddBtn);
    containerForBtns.appendChild(inputsAddBtn);

    card.appendChild(containerForBtns);
    card.appendChild(containerForRealization);
    card.appendChild(containerForSomething);

    blocksAddBtn.addEventListener('click', async () => {
      const container = createElement('div', 'containerBlk');
      const data = await this.getDataBlocks();

      const block1 = data.data[0];
      const block2 = data.data[1];
      // console.log(block1)

      for (let i = 1; i <= data.data.length; i++) {
        const block = createElement('div', `block${i}`);
        block.innerHTML = "Block";
        container.appendChild(block);
        containerForRealization.appendChild(container);
      }

      const blockFirstWithStyles = document.querySelector(`.block1`);
      const blockSecondWithStyles = document.querySelector(`.block2`);


      addStyles(blockFirstWithStyles, block1);
      addStyles(blockSecondWithStyles, block2);

      const delBtn = createElement('button', 'button-del');
      delBtn.innerHTML = 'Delete All';
      container.appendChild(delBtn);
      delBtn.addEventListener('click', async (event) => {
        await event.target.parentNode.remove();
      })

    })

    buttonsAddBtn.addEventListener('click', async () => {
      const container = createElement('div', 'containerBtn');
      const data = await this.getDataButtons();

      const btn1 = data.data[0];
      const btn2 = data.data[1];
      const btn3 = data.data[2];

      for (let i = 1; i <= data.data.length; i++) {
        let button = createElement('button', `button${i}`);
        button.innerHTML = "Button";
        container.appendChild(button);
        containerForRealization.appendChild(container);
      }

      const btnFirstWithStyles = document.querySelector(`.button1`);
      const btnSecondWithStyles = document.querySelector(`.button2`);
      const btnThirdWithStyles = document.querySelector(`.button3`);

      addStyles(btnFirstWithStyles, btn1);
      addStyles(btnSecondWithStyles, btn2);
      addStyles(btnThirdWithStyles, btn3);

      const delBtn = createElement('button', 'button-del');
      delBtn.innerHTML = 'Delete All';
      container.appendChild(delBtn);
      delBtn.addEventListener('click', async (event) => {
        await event.target.parentNode.remove();
      })
    })

    inputsAddBtn.addEventListener('click', async () => {
      const container = createElement('div', 'containerInpt');
      const data = await this.getDataInputs();

      let [input1, input2, input3, input4, input5, input6, input7, input8, input9] = data.data;

      for (let i = 1; i <= data.data.length; i++) {
        let input = createElement('input', `input${i}`);
        container.appendChild(input);
        containerForRealization.appendChild(container);

      }

      const intWithStyles_1 = document.querySelector(`.input1`);
      const intWithStyles_2 = document.querySelector(`.input2`);
      const intWithStyles_3 = document.querySelector(`.input3`);
      const intWithStyles_4 = document.querySelector(`.input4`);
      const intWithStyles_5 = document.querySelector(`.input5`);
      const intWithStyles_6 = document.querySelector(`.input6`);
      const intWithStyles_7 = document.querySelector(`.input7`);
      const intWithStyles_8 = document.querySelector(`.input8`);
      const intWithStyles_9 = document.querySelector(`.input9`);


      addStyles(intWithStyles_1, input1);
      addStyles(intWithStyles_2, input2);
      addStyles(intWithStyles_3, input3);
      addStyles(intWithStyles_4, input4);
      addStyles(intWithStyles_5, input5);
      addStyles(intWithStyles_6, input6);
      addStyles(intWithStyles_7, input7);
      addStyles(intWithStyles_8, input8);
      addStyles(intWithStyles_9, input9);

      const delBtn = createElement('button', 'button-del');
      delBtn.innerHTML = 'Delete All';
      container.appendChild(delBtn);
      delBtn.addEventListener('click', async (event) => {
        await event.target.parentNode.remove();
      })
    })
    //card.innerHTML = 'CARD';
    return card;
  }
}

export default Card;

/*
Обычно мы используем style.* для присвоения индивидуальных свойств стиля. Нельзя установить список стилей как, например, div.style="color: red; width: 100px", потому что div.style – это объект, и он доступен только для чтения.

Для задания нескольких стилей в одной строке используется специальное свойство style.cssText:

<div id="div">Button</div>

<script>
  // можем даже устанавливать специальные флаги для стилей, например, "important"
  div.style.cssText=`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

  alert(div.style.cssText);
</script>
 */