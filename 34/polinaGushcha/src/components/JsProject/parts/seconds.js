import '../styles';

export const seconds = (block) => {
  const second = document.createElement('div');
  second.className = 'second';
  const secondLine = document.createElement('div');
  secondLine.className = 'secondLine';
  secondLine.setAttribute('id', 'sc');
  second.appendChild(secondLine);
  block.appendChild(second);
};