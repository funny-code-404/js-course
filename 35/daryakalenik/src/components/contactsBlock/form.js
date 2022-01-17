import {
  getAllReviews,
  createReviews,
  deleteReview,
} from "../../services/api/reviewsApi";
import { DataBlock, reviewBlock } from "./reviewBlock";
import style from "./style";

export const reviewWrapper = document.createElement("div");

export class Form {
  constructor(container) {
    return this.init(container);
  }

  init(container) {
    this.render(container);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = [...e.target.elements];
    const data = inputs.reduce((acc, input) => {
      if (input.name != "") {
        acc[input.name] = input.value;
      }

      return acc;
    }, {});

    await createReviews(data);
    reviewWrapper.innerHTML = "";
    new DataBlock(reviewWrapper);
    e.target.reset();
  };

  render(container) {
    const form = document.createElement("form");
    form.classList.add(`form`);
    const name = document.createElement("input");
    const email = document.createElement("input");
    const review = document.createElement("input");
    const button = document.createElement("button");

    name.id = "name";
    name.name = "name";
    name.placeholder = "name";
    email.id = "email";
    email.name = "email";
    email.placeholder = "email";
    review.id = "review";
    review.name = "review";
    review.placeholder = "review";

    button.innerHTML = "Send request";

    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(review);
    form.appendChild(button);

    form.addEventListener("submit", this.handleSubmit);

    container.appendChild(form);
    container.appendChild(reviewWrapper);
    reviewWrapper.innerHTML = "";
    new DataBlock(reviewWrapper);
  }
}
