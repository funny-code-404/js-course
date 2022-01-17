export class Checkbox {
  constructor(container) {
    const checkboxWrapper = document.createElement(`div`);
    const checkbox = document.createElement(`input`);
    checkbox.classList.add(`checkbox`);
    checkbox.id = `checkbox`;
    checkbox.required = true;
    checkbox.setAttribute("type", `checkbox`);
    checkbox.setAttribute("title", `Cогласен с пользовательским соглашением`);
    checkbox.setAttribute(`name`, `checkbox`);
    const span = document.createElement(`label`);
    span.setAttribute("for", `checkbox`);
    span.classList.add(`userSpan`);
    span.textContent = `Согласен с пользовательским соглашением`;
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(span);
    container.appendChild(checkboxWrapper);
  }
}
