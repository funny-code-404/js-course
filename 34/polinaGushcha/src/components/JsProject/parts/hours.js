import '../styles';

export const hours = (block) => {
  const hour = document.createElement('div');
  hour.className = 'hour';
  const hourLine = document.createElement('div');
  hourLine.className = 'hourLine';
  hourLine.setAttribute('id', 'hr');
  hour.appendChild(hourLine);
  block.appendChild(hour);
};