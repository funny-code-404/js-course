export class Submit {
  constructor(container) {
    const submit = document.createElement(`input`);
    submit.classList.add(`submit`);
    submit.id = `submit`;
    submit.setAttribute("type", `submit`);

    container.appendChild(submit);
  }
}
