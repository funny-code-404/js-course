import { Username } from "./components/username";
import { Password } from "./components/password";
import { Submit } from "./components/submit";
import { Checkbox } from "./components/checkbox";
import "./style";

class AboutBlock {
  constructor() {
    return this.init();
  }

  init() {
    return this.render();
  }

  render() {
    const formWrapper = document.createElement(`div`);
    const form = document.createElement("form");
    formWrapper.appendChild(form);
    form.classList.add(`form`);
    formWrapper.classList.add("formWrapper");
    form.setAttribute(`action`, `POST`);
    const username = new Username(form);
    const password = new Password(form);
    const checkbox = new Checkbox(form);
    const submit = new Submit(form);
    form.addEventListener(`submit`, function (e) {
      e.preventDefault();
      const data = {
        username: this.username.value,
        password: this.password.value,
      };
      console.log(data);
      form.reset();
    });
    return formWrapper;
  }
}

export default AboutBlock;
