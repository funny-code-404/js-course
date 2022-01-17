import '../styles';

export const minutes = (block) => {
  const minute = document.createElement('div');
  minute.className = 'minute';
  const minuteLine = document.createElement('div');
  minuteLine.className = 'minuteLine';
  minuteLine.setAttribute('id', 'mn');
  minute.appendChild(minuteLine);
  block.appendChild(minute);
};