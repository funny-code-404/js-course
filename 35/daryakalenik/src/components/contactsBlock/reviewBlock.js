import {
  getAllReviews,
  createReviews,
  deleteReview,
} from "../../services/api/reviewsApi";

import { reviewWrapper } from "./form";

export class DataBlock {
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
    ul.classList.add(`revWrapper`);

    data.forEach((item) => {
      if (item.review.length !== 0) {
        const li = document.createElement("li");

        const review = document.createElement("p");
        const button = document.createElement("button");
        review.innerHTML = item.review;
        button.innerHTML = "x";
        button.classList.add(`revButton`);
        review.classList.add(`revPar`);
        button.id = item.id;
        li.appendChild(review);
        li.appendChild(button);

        ul.appendChild(li);
      }
    });

    ul.addEventListener("click", async (e) => {
      if (e.target.tagName === "BUTTON") {
        await deleteReview(e.target.id);
        reviewWrapper.innerHTML = "";
        new DataBlock(reviewWrapper);
      }
      return;
    });

    container.appendChild(ul);
  }
}
