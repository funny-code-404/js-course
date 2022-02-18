import avatar from '../assets/image.jpg';
import './style-avatar.scss';

export function createAvatar(container) {
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = avatar;
  container.append(img);
}
