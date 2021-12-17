import { getAllReviews, deleteReview } from "../../services/api/reviewsApi";
import { wrapperResponse } from "../Form/index";
import "./styles.scss";

class DataBlock {
  constructor(container) {
    this.init(container);
  }

  async init(container) {
    const data = await getAllReviews();
    console.log(data);
    this.render(container, data);
  }

  render(container, data) {
    const ul = document.createElement("ul");

    data.forEach((item) => {
      const li = document.createElement("li");

      const name = document.createElement("h1");
      const email = document.createElement("h2");
      const review = document.createElement("p");
      const button = document.createElement("button");

      name.innerHTML = item.name;
      email.innerHTML = item.email;
      review.innerHTML = item.review;
      button.innerHTML = "x";
      button.id = item.id;

      li.appendChild(name);
      li.appendChild(email);
      li.appendChild(review);
      li.appendChild(button);

      ul.appendChild(li);
    });

    ul.addEventListener("click", async (e) => {
      if (e.target.tagName === "BUTTON") {
        await deleteReview(e.target.id);
        wrapperResponse.innerHTML = "";
        new DataBlock(wrapperResponse);
      }
      return;
    });

    container.appendChild(ul);
  }
}

export default DataBlock;
