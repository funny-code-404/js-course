import {
  getAllComments,
  getSingleComment,
} from "../../services/api/commentsApi";
import { getAllReviews } from "../../services/api/reviewsApi";
import style from "./style";

// БУДЕТ РАБОТАТЬ, ЕСЛИ ИЗМЕНИТЬ ССЫЛКУ В constants.js в переменной baseURL на https://jsonplaceholder.typicode.com и поменять переменную data в init (закомментировано)

export class DataBlock {
  constructor(container) {
    this.init(container);
    // this.data = [];
  }

  async init(container) {
    this.render(container);
    // const data = await getAllComments();
    const data = [];

    console.log(data);
    this.renderList(container, data);
  }

  renderList(container, data) {
    const listWrapper = document.createElement(`ul`);
    listWrapper.classList.add(`listWrapper`);
    container.appendChild(listWrapper);
    // data.forEach((element) => {
    //   const wrapper = document.createElement(`li`);
    //   wrapper.textContent = `${element.name}, ${element.email}`;
    //   listWrapper.appendChild(wrapper);
    //   wrapper.id = element.id;
    //   wrapper.classList.add(`name`);
    //   wrapper.addEventListener(`click`, async (e) => {
    //     const data = await getSingleComment(e.target.id);
    //     const newData = document.createElement(`p`);
    //     console.log(data);
    //     newData.textContent = `MORE DATA IN CONSOLE`;
    //     e.target.appendChild(newData);
    //   });
    // });
  }

  render(container) {
    const article = document.createElement("div");
    container.appendChild(article);
  }
}
