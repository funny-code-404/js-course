import { getComments } from '../../services/api/api';
import { getSingleComment } from '../../services/api/api';
import './style.scss';

class UserDataBlock {
  constructor(container) {
    this.init(container);
  }

  init(container) {
    this.render(container);
  }

  async render(container) {
    const data = await getComments();
    const article = document.createElement('article');
    this.renderList(article, data);
    container.appendChild(article);
  }

  renderList(container, data) {
    const headers = ['id', 'name', 'email', 'text'];

    Object.keys(data).forEach((key) => {
      const div = document.createElement('div');
      div.classList.add('userData');

      headers.forEach((el) => {
        const p = document.createElement('p');
        p.innerText = `${el} : ${data[key][el]}`;
        div.appendChild(p);
      });

      const btnId = data[key].id;
      this.renderButton(div, btnId);
      container.appendChild(div);
    });
  }

  renderButton(container, id) {
    const button = document.createElement('button');
    button.classList.add('userButton');
    button.innerText = 'Single comment';
    button.id = id;

    button.addEventListener('click', async (e) => {
      const data = await getSingleComment(e.target.id);
      this.clickButton(container, data);
      button.disabled = true;
    });
    container.appendChild(button);
  }

  clickButton(container, data) {
    const div = document.createElement('div');
    div.classList.add('singleComment');
    for (let i in data.data) {
      const p = document.createElement('p');
      p.innerText = i + ' : ' + data.data[i];
      div.appendChild(p);
    }
    container.appendChild(div);
  }
}

export default UserDataBlock;
