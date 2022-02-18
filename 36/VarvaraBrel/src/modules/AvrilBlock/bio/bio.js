import './bio.scss';

export function createBio(container) {
  const div = document.createElement('div');
  div.classList.add('bio');

  const a = document.createElement('p');
  a.textContent =
    'Аврил Лавин – популярная франкоканадская певица в стиле поп-рок. Актриса, автор композиций, предприниматель и дизайнер. В 2002 году ее дебютная пластинка Let Go разошлась по миру 20-миллионным тиражом. К 2020 году дискография автора песен и любимой исполнительницы сотен тысяч поклонников во всех уголках планеты насчитывает шесть дисков, последний из которых, Head Above Water, был записан в 2019 году.';
  div.append(a);
  container.append(div);
}
