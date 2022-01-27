import './style.css';

export const personalInformation = (block) => {
  const container = document.createElement('div');
  const userName = document.createElement('p');
  const userAge = document.createElement('p');
  const userSex = document.createElement('p');
  const userEducation = document.createElement('p');


  userName.innerHTML = 'Котонов кот котович';
  userName.style.textTransform = 'uppercase';
  userName.style.fontWeight = 'bolder';
  userName.style.fontSize = '30px';
  userName.style.textAlign = 'center';
  userName.style.color = 'pink';
  userName.style.textDecoration = 'underline';

  userAge.innerHTML = 'Возраст: 5 лет';
  userSex.innerHTML = 'Пол: мужской';
  userEducation.innerHTML = 'Образование: БГУ кошачий факультет';


  container.className = 'container';
  container.appendChild(userName);
  container.appendChild(userAge);
  container.appendChild(userSex);
  container.appendChild(userEducation);
  block.appendChild(container);
};