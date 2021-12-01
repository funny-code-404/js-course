import img from './avatar.png';
export const createAvatar = () => {
   const avatar = document.createElement('img');
   avatar.className = 'avatar';
   avatar.src = img;
   document.body.appendChild(avatar);
 }

