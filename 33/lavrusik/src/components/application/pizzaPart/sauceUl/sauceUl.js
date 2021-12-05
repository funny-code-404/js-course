const sauceUl = {
	sauce_1: 'Томатный',
	sauce_2: 'Чесночный',
	sauce_3: 'Карри',
	sauce_4: 'Терияки',
};
function renderSauce(){
	const sauceWrapper = document.createElement('div');
	sauceWrapper.className = 'sauce_wrapper';
	const headSauce = document.createElement('h3');
	headSauce.innerHTML = 'Соус';
	const sauceList = document.createElement('ul');
	sauceList.id = 'sauce';
	sauceList.className = 'sauceUl';
	sauceWrapper.appendChild(headSauce);
	sauceWrapper.appendChild(sauceList);
	Object.keys(sauceUl).forEach((item) => {
		const sauce = document.createElement('li');
		sauce.innerText = sauceUl[item];
		sauce.className = 'sous';
		sauce.id = item;
		sauceList.appendChild(sauce);
	})
	return sauceWrapper;
}
export default renderSauce;