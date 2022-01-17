export class Username {
  constructor(container) {
    const input = document.createElement(`input`);
    input.classList.add(`username`);
    input.id = `username`;
    input.required = true;
    input.setAttribute("type", `text`);
    input.setAttribute("placeholder", `Username`);
    input.setAttribute(`name`, `username`);
    container.appendChild(input);
  }
}
