import { postReview } from '../../services/api/apiReview';
import RenderListReview from './renderList';
import './style.scss';

export const renderWrapper = document.createElement('div');

class FormBlock {
  constructor(container) {
    this.render(container);
  }

  render(container) {
    this.renderForm(container);
    this.renderList(renderWrapper);
    container.appendChild(renderWrapper);
  }

  renderForm(container) {
    const form = document.createElement('form');
    form.classList.add('form');

    form.addEventListener('submit', this.handleSubmit);

    const formElem = ['name', 'email', 'review'];
    formElem.forEach((el) => {
      const input = document.createElement('input');
      input.id = el;
      input.name = el;
      input.placeholder = el;
      form.appendChild(input);
    });

    const button = document.createElement('button');
    button.innerHTML = 'Send request';
    form.appendChild(button);

    container.appendChild(form);
  }

  renderList(container) {
    const list = new RenderListReview(container);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = [...e.target.elements];
    const data = inputs.reduce((acc, input) => {
      if (input.name) {
        acc[input.name] = input.value;
      }
      return acc;
    }, {});
    await postReview(data);
    renderWrapper.innerHTML = '';
    new RenderListReview(renderWrapper);
  };
}

export default FormBlock;
