function liMaker() {
  return document.createElement('li');
}



export const infoMaker = () => {
  const info = document.createElement('ul');
  info.classList.add('info');
  const fullName = liMaker();

  fullName.textContent = 'ФИО: Трекало Валерий Константинович';

  const city = liMaker();
  city.textContent = 'Город: Гродно';

  const profession = liMaker();
  profession.textContent = 'Профессия: Дефектоскопист';

  const dateOfBirth = liMaker();
  dateOfBirth.textContent = 'Дата рождения: 02.01.1998';
  [city, profession, fullName, dateOfBirth].forEach(item => {
    info.append(item);
  });
  return info;
}