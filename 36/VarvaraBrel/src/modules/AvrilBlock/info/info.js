import './info.scss';

export function createInfo(container) {
  const div = document.createElement('div');
  div.classList.add('infoBlock');

  const infoBlock = {
    name: 'Имя: Аврил Лавин (Avril Lavigne)',
    bday: 'День рождения: 27 сентября 1984 (37 лет)',
    place: 'Место рождения: Бельвиль, Онтарио',
    height: 'Рост: 157 см',
    weight: 'Вес: 49 кг',
  };

  Object.keys(infoBlock).forEach((key) => {
    const a = document.createElement('p');
    a.textContent = infoBlock[key];
    div.append(a);
  });

  container.append(div);
}
