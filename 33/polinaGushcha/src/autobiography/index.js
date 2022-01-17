import './style.css';

export const autobiography = (block) => {
  const container = document.createElement('div');
  const heading = document.createElement('p');
  const text = document.createElement('p');

  heading.innerHTML = 'Меня стоит взять на работу программистом, потому что я:';

  text.innerHTML = 'Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот!';

  container.className = 'autobiography';

  container.appendChild(heading);
  container.appendChild(text);
  block.appendChild(container);
};