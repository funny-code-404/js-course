const ing2Ul = {
	ing2_1: 'Томат',
	ing2_2: 'Сыр',
	ing2_3: 'Оливки',
	ing2_4: 'Перец',
};
function renderIng2(){
	const ing2Wrapper = document.createElement('div');
	ing2Wrapper.className = 'ing2_wrapper';
	const headIng2 = document.createElement('h3');
	headIng2.innerHTML = 'Ингридиент 2';
	const ing2List = document.createElement('ul');
	ing2List.id = 'ing2';
	ing2List.className = 'ing2Ul';
	ing2Wrapper.appendChild(headIng2);
	ing2Wrapper.appendChild(ing2List);
	Object.keys(ing2Ul).forEach((item) => {
		const ing2 = document.createElement('li');
		ing2.innerText = ing2Ul[item];
		ing2.className = 'ing2';
		ing2.id = item;
		ing2List.appendChild(ing2);
	})
	return ing2Wrapper;
}
export default renderIng2;