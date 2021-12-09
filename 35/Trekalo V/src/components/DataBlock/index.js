import {
  getAllComments,
  getSingleComment,
} from "../../services/api/commentsApi";
import "./styles.scss";
class DataBlock {
  constructor(container) {
    this.init(container);
  }

  init(container) {
    this.render(container);
  }

  async renderLi(container) {
    // можно вынести, т.к. не использует THIS
    const info = await getAllComments();
    info.splice(50, 450);
    info.map(({ email, id }) => {
      const li = document.createElement("li");
      li.classList.add("email");
      li.innerHTML = `${email}`;
      this.renderButton(li, id);
      container.appendChild(li);
    });
  }

  renderButton(container, id) {
    // можно вынести, т.к. не использует THIS
    const button = document.createElement("button");
    button.innerHTML = "Fetch button";
    button.id = id;
    button.classList.add("button");
    container.appendChild(button);

    button.addEventListener("click", async (e) => {
      const data = await getSingleComment(e.target.id);
      console.log(data);
      this.createUserInfoById(container, data);
    });
  }

  createUserInfoById(container, info) {
    // можно вынести, т.к. не использует THIS
    const span = document.createElement("span");
    span.innerHTML = `id: ${info.id}, something text: ${info.name}`;
    span.classList.add("info_span");
    if (
      ![...container.children].find((item) => item.className === "info_span")
    ) {
      container.appendChild(span);
    }
  }

  render(container) {
    const ul = document.createElement("ul");
    this.renderLi(ul);
    container.appendChild(ul);
  }
}

export default DataBlock;
