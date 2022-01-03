import img from './assets/cat';

export const addUserPhoto = (block) => {
  const image = document.createElement('img');
  image.src = img;
  image.style.border = '2px solid rgb(255, 240, 192)';
  block.appendChild(image);
};