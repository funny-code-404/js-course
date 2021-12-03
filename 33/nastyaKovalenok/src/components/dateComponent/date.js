import './dateStyle.css'

export function createDate() {
    const div = document.createElement('div')
    div.classList.add('date')
    div.textContent = "Дата ___________"
    return div;
}