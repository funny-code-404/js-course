import img from './avatar.png';
export const createAvatar = () => {
	const imgWrapper = document.createElement('div');
	imgWrapper.className = 'imgwrapper';
  const avatar = document.createElement('img');
  avatar.className = 'avatar';
	avatar.src = img;
	imgWrapper.appendChild(avatar);
	return imgWrapper;
}