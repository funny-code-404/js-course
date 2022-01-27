export class Password {
  constructor(container) {
    const password = document.createElement(`input`);
    password.classList.add(`password`);
    password.id = `password`;
    password.required = true;
    password.setAttribute("type", `password`);
    password.setAttribute("placeholder", `Password`);
    password.setAttribute(`name`, `password`);
    container.appendChild(password);
  }
}
