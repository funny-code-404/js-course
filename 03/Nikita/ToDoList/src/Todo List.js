// import './Hello Todo List';
import './styleCSS/style ToDo List';

window.onload = function () {

let areainput = document.getElementById('areainput'); /*Создаем Инпут*/
let button = document.getElementById('button'); /*Создаем кнопку*/
let alerting = document.getElementById('alerting');  	/*Создаем Сообщение*/		
let list = document.getElementById('list');  /*Создаем UL*/
let searchInput = document.getElementById('filter') /*Создаем фильтр инпут*/
let newArray = JSON.parse(localStorage.getItem("newArray")) || [];;	/*Создаем Массивs*/

const getMyDate = function () {
    let d = new Date();
	let a = (`${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`);
 	let b = (`${d.getHours()}:${d.getMinutes()}`);
     
    return {
 	 	value: +d,
 	 	label: `${a} ${b}`
    };
}

function handleClick() {
	let newTodo = {
		todo: areainput.value, 	/*Создаём ОБЪЕКТ, как объект массива*/
		createdAt: getMyDate(),
		}						/*Заполняем все Вэлью инпута в переменную*/
	newArray.push(newTodo); /*Пушим в массив*/
	localStorage.setItem("newArray)", JSON.stringify(newArray));
	render(newArray);  		/*Рендерим массив*/
	console.log(newArray)
}
button.addEventListener('click', handleClick);

const sortBy = function(val){
switch (val) {
  case "name":
    newArray.sort((a, b) => {
      if (a.todo > b.todo) {
        return 1;
      } else if (a.todo < b.todo) {
        return -1;
      } else return 0;
    });
    break;
  case "date":
    newArray.sort((a, b) => {
      if (a.createdAt.value < b.createdAt.value) {
        return 1;
      } else if (a.createdAt.value > b.createdAt.value) {
        return -1;
      } else return 0;
    });
    break;
}

render();
};

sort.onchange = function (e) {
        sortBy(e.target.value);
        render();
      };

const render = (data = newArray) => {
	const items = data.reduce((str, item, i) => {
	   /*Данным методом мы преобразуем в строку каждый итый элемент массива, как цикл фор, только item*/
			return (str + `<li class="myLi">
              <p id="todoin">${item?.todo}</p>
              <p id="tododate">${item?.createdAt.label}</p> 
			<div><p id='delete' data-num=${i}>X</p></div></li>`); 
 				/*Даем указание ПОСЧИТАй, или правильнее выведи результат инструкции items - элемент массива в строковом виде  */
 				/*Преобразуем, путем добавлеия LI в объект, который innerHTML будет выводить как Li в верстке, где item - элемент массива newArray, i - его номер в data*/
 				/*Добавляем строчный элемент span - для создания копки удалить туду*/

	}, '');  
	list.innerHTML = items;/*Добавляем в верстку(скармливам innerHTML) Результат return и получаем li здорового человека*/
}

const handleDelete = function (e) {
	if (e.target.id === 'delete') { 
		hideNotification();
		const result = confirm('Вы точно хотите удалить')
		 	if (result === true) {
		 		newArray.splice(e.target.dataset.num, 1);
		 		localStorage.setItem("newArray", JSON.stringify(newArray));
		 		render(newArray);
		 	}
		 	else {
		 		alert ('Задание еще в списке')
		 	}
		 console.log(e.target.dataset.num)	
	}
}
list.addEventListener('click', 	handleDelete);

let liStyle = list.style;
liStyle.width = '90%';

const handleOnMessage = function (e) {
	if (e.target.id === 'delete') { 
    list.style.color = 'red';
    alerting.style.opacity = '1';
   }
}
list.addEventListener("mouseover", 	handleOnMessage);

const hideNotification = () => {
 	list.style.color = '';
    alerting.style.opacity = '0';
    console.log(list)
}

const handleOffMessage = function (e) {
	if (e.target.id === 'delete') { 
    hideNotification();
   	}
}
list.addEventListener("mouseout", 	handleOffMessage);

searchInput.addEventListener('input',
function (e) {
    let inputValue = e.target.value; /*присваеваем переменную вводимому в инпут значению*/
 	let filteredData = newArray.filter( /*Запускаем фильтр*/
     	function(item) {
        return item.todo.includes(inputValue);/*Если свойство todo включает в себя вводимый инпутб
        то мыделаем рендер в массив filter*/
    }
);
    render(filteredData); 	/*Выводим массив */
    console.log(filteredData)
  });
render(); /*Перерендерим новый массив*/
newArray.length = 0;
console.log(newArray)
}


