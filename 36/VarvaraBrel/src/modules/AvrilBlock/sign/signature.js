import './sign.scss';

export function createSignature(container) {
  const div = document.createElement('div');
  div.classList.add('sign');
  const pDate = document.createElement('p');
  const pSign = document.createElement('p');
  pDate.textContent = 'Дата  ______________';
  pSign.textContent = 'Подпись  _____________________';
  div.append(pDate, pSign);
  container.append(div);
}
