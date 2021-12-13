import observer from "../../utils/observer";
import { DATA_RECEIVED } from "../../events";
import { postReviews } from "../../services/api/reviewsApi";
import DataBlock from "../DataBlock";

export const wrapperResponse = document.createElement("div");

class Form {
  constructor(container) {
    return this.init(container);
  }

  // getData() {
  //   fetch(`https://jsonplaceholder.typicode.com/todos`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       observer.state = data;
  //       observer.notify(DATA_RECEIVED);
  //     });
  // }
  init(container) {
    // this.getData();
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

    await postReviews(data);
    wrapperResponse.innerHTML = "";
    new DataBlock(wrapperResponse);

    // console.log(data);
  };

  inputMaker(container) {
    // функция cоздание фомры
    const obj = {
      name: "name",
      email: "email",
      review: "review",
    };
    for (let key in obj) {
      const input = document.createElement("input");
      input.id = obj[key];
      input.name = obj[key];
      input.placeholder = obj[key];
      container.appendChild(input);
    }
    const button = document.createElement("button");
    button.innerHTML = `Send request`;
    container.appendChild(button);
  }

  render(container) {
    const form = document.createElement("form");
    form.classList.add(`form`);
    form.addEventListener("submit", this.handleSubmit);

    this.inputMaker(form);
    container.appendChild(form);
    container.appendChild(wrapperResponse);
  }
}

export default Form;
