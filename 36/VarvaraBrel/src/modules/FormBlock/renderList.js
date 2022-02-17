import { getAllReviews, deleteReview } from '../../services/api/apiReview';
import { renderWrapper } from '.';
import './style.scss';

class RenderListReview {
  constructor(container) {
    this.init(container);
  }

  async init(container) {
    const data = await getAllReviews();
    this.render(container, data);
  }

  render(container, data) {
    const ul = document.createElement('ul');
    ul.classList.add('ulReview');
    const tags = ['name', 'email', 'review'];
    data.forEach((e) => {
      const li = document.createElement('li');

      tags.forEach((tag) => {
        const el = document.createElement('h2');
        el.classList.add(`${tag}Review`);
        el.innerHTML = e[tag];
        li.appendChild(el);
      });

      const button = document.createElement('button');
      button.innerHTML = 'Delete Review';
      button.id = e.id;

      li.appendChild(button);

      ul.appendChild(li);
    });

    ul.addEventListener('click', async (e) => {
      if (e.target.tagName === 'BUTTON') {
        await deleteReview(e.target.id);
        renderWrapper.innerHTML = '';
        new RenderListReview(renderWrapper);
      }
    });

    container.appendChild(ul);
  }
}

export default RenderListReview;
