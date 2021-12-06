import "./infoStyle.css"

export function createInfoDiv() {
    const div = document.createElement('div');
    div.classList.add('info')

    const name = document.createElement('p');
    name.textContent = "ФИО : Косяк Павел Александрович";
    const dateOfBirth = document.createElement('p')
    dateOfBirth.textContent = "Дата рождения : 01.11.1888";
    const height = document.createElement('p')
    height.textContent = 'Рост : 189см';
    const weight = document.createElement('p')
    weight.textContent = 'Вес : 66кг';
    const colorEyes = document.createElement('p')
    colorEyes.textContent = 'Цвет глаз : зелёные';

    [name, dateOfBirth, height, weight, colorEyes].forEach((item) => {
        div.append(item)
    })
    return div;
}