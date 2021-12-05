const ing1Ul = {
	ing1_1: 'Ветчина',
	ing1_2: 'Грудинка',
	ing1_3: 'Лосось',
	ing1_4: 'Креветки',
};

function renderIng1(){
	const ing1Wrapper = document.createElement('div');
	ing1Wrapper.className = 'ing1_wrapper';
	const headIng1 = document.createElement('h3');
	headIng1.innerHTML = 'Ингридиент 1';
	const ing1List = document.createElement('ul');
	ing1List.id = 'ing1';
	ing1List.className = 'ing1Ul';
	ing1Wrapper.appendChild(headIng1);
	ing1Wrapper.appendChild(ing1List);
	Object.keys(ing1Ul).forEach((item) => {
		const ing1 = document.createElement('li');
		ing1.innerText = ing1Ul[item];
		ing1.className = 'ing1';
		ing1.id = item;
		ing1List.appendChild(ing1);
	})
	return ing1Wrapper;
}

export default renderIng1;