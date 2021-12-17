	const osnovaUl = {
	osnova_1: 'Тонкое тесто',
	osnova_2: 'Пышное тесто',
	osnova_3: 'Слоеное тесто',
	osnova_4: 'Тесто на пиве',
};
function renderOsnova(){
	const osnovaWrapper = document.createElement('div');
	osnovaWrapper.className = 'osnova_wrapper';
	const headOsnova = document.createElement('h3');
	headOsnova.innerHTML = 'Основа';
	const osnovaList = document.createElement('ul');
	osnovaList.id = 'osnova';
	osnovaList.className = 'osnovaUl';
	osnovaWrapper.appendChild(headOsnova);
	osnovaWrapper.appendChild(osnovaList);
	Object.keys(osnovaUl).forEach((item) => {
		const osnova = document.createElement('li');
		osnova.innerText = osnovaUl[item];
		osnova.className = 'osnova';
		osnova.id = item;
		osnovaList.appendChild(osnova);
	})
	return osnovaWrapper;
}
export default renderOsnova;