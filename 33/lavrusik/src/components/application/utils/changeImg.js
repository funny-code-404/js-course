export let arrClassNameListOrder = [];
let listOrder = [];
export let arrOnlyFindClass = [];
export function changeImg(shouldChange) {
	const imgArray = [...document.getElementById('image_pizza').children];
	listOrder = [...document.getElementById('listOrderPizza').children];
	arrClassNameListOrder = [];
	listOrder.forEach(item => arrClassNameListOrder.push(item.className));
	arrOnlyFindClass = arrClassNameListOrder.filter((item, index) => arrClassNameListOrder.indexOf(item) === index);
	console.log(arrOnlyFindClass);
	console.log(arrOnlyFindClass.length);
	if (shouldChange) {
		imgArray[arrOnlyFindClass.length - 1].style.opacity = 1;
	} else {
		if (arrOnlyFindClass.length <= 3) {
			imgArray[arrOnlyFindClass.length].style.opacity = 0;
		}
	}
}