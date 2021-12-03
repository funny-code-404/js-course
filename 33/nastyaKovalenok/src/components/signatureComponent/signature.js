import "./signatureStyle.css"

export function createSignature() {
    const div = document.createElement('div')
    div.classList.add('signature')
    div.textContent = "Подпись ___________"
    return div;
}