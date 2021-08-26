// getting all required elements
const addBtn = document.querySelector('.content-in-progr__btn'); // кнопка добавлять элементы
const taskList = document.querySelector('.content-in-progr__todolist'); // UL весь
const btnClearAll = document.getElementById('btnclearall'); // кнопка удалить все
const alert = document.getElementById('alert'); // modal window
const alert2 = document.getElementById('alert2'); // modal window 2
const noBtn = document.getElementById('no'); // btn modal
const ok = document.getElementById('ok'); // btn modal
const yesBtn = document.getElementById('yes'); // btn modal
const ulCount = document.getElementsByClassName('selected')[0];
const counter = document.getElementsByClassName('counter')[0];
// eslint-disable-next-line no-use-before-define
addBtn.addEventListener('click', addNewTask); // обработчик на кнопку "добавить элемент"

function addNewTask() {
	if (ulCount.childElementCount >= 5) {
		alert2.style.display = 'block';
		return;
	}

	taskList.insertAdjacentHTML(
		'afterbegin',
		` <li class="content-in-progr__todolist" ><span class="trash">Some
		text...</span><i class="fas fa-arrows-alt-h"></i><i class="fas fa-trash-restore-alt"></i></li>`,
	);

	counter.innerHTML = `Tasks:${ulCount.childElementCount}`;
}

btnClearAll.onclick = () => { // по щелчку появл мод окно
	alert.style.display = 'block';
};

noBtn.addEventListener('click', () => { //   "нет" кнопка в мод окне
	alert.style.display = 'none';
});

ok.addEventListener('click', () => { //   "ok" кнопка в мод окне
	alert2.style.display = 'none';
});

yesBtn.addEventListener('click', () => { // "да" кнопка в мод окне
	taskList.innerHTML = '';
	alert.style.display = 'none';
	counter.innerHTML = 'Tasks:0';
});

taskList.addEventListener('click', (e) => { // удаление одного Li
	// eslint-disable-next-line eqeqeq
	if (e.target.classList.contains('fa-trash-restore-alt')) {
		e.target.parentElement.remove();
		counter.innerHTML = `Tasks:${ulCount.childElementCount}`;
	}
});

window.onclick = (event) => { // по щелчку модальеное окно исчезает(не только на кнопку в нем)
	// eslint-disable-next-line eqeqeq
	if (event.target == alert2) {
		alert2.style.display = 'none';
	}
};