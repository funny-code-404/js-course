import './style.css';

export const autobiography = (block) => {
  const content = document.createElement('div');
  const heading = document.createElement('p');
  const text = document.createElement('p');

  heading.innerHTML = 'Меня стоит взять на работу программистом, потому что я:';

  text.innerHTML = 'Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот Кот!';

  content.className = 'autobiography';

  content.appendChild(heading);
  content.appendChild(text);
  block.appendChild(content);
};