const inputBox = document.querySelector(".board__card-input-field input"); // для ввода тасков
const addBtn = document.querySelector(".board__card-input-field button"); // кнопка-плюсик для каждого таска
const todoList = document.querySelector(".board__card-todo-List"); // список с с тасками 
const deleteAllBtn = document.querySelector(".board__card-container-for-button button"); // кнопка удаления всех тасков
const searchInput = document.querySelector("#board__card-search");
const delOneTaskBtn = document.querySelector('.board__card-todo-List');

// при введении 
inputBox.onkeyup = () => {
    let userEnteredTask = inputBox.value; // получила введенный таск
    if (userEnteredTask.trim() != 0) { //удалила лишние пробелы
        addBtn.classList.add("active"); // кнопка активного цвета
    } else {
        addBtn.classList.remove("active"); //кнопка неактивного цвета
    }
}

showTasks(); // показала задания

// кнопка добавления
addBtn.onclick = () => { // нажали на кнопку +
    let userEnteredTask = inputBox.value; //  // получила введенный таск
    let getLocalStorageData = localStorage.getItem("New Todo"); // получила localStorage
    if (getLocalStorageData == null) { // если localStorage не содержит тасков
        listArray = []; //пустой массив 
    } else {
        listArray = JSON.parse(getLocalStorageData); //перевела json-формат в js
    }
    listArray.push(userEnteredTask); //пушим новый таск в массив
    localStorage.setItem("New Todo", JSON.stringify(listArray)); // первела js-объект в  json-формат
    showTasks();
    addBtn.classList.remove("active"); //инактивировала кнопку после введения таска 


}

// чтоб показать таски
function showTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTasksNumb = document.querySelector(".board__card-count-of-tasks");
    pendingTasksNumb.textContent = listArray.length; //чтоб получить количество заданий
    if (listArray.length > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li >${element}<span data-id="${index}" class="board__card-icon"><i class="fas fa-trash"></i></span></li>`;
        // newLiTag += `<li >${element}<span class="board__card-icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //добавили новый ли в список
    inputBox.value = ""; //после добавления обнулила
}

/*// удалить таски через мусорку
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); //call the showTasks function
}
*/
// удалить таски через мусорку
delOneTaskBtn.addEventListener('click', (event, index) => {
    const id = event.target.getAttribute('data-id');
    if (!id) return;
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); //call the showTasks function
})

// удалить таски через кнопку
deleteAllBtn.onclick = () => {
    listArray = []; //empty the array
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
    showTasks(); //call the showTasks function
}

// фильтр
function search() {
    let input, filter, ul, li, i, task, countTasks;

    countTasks = document.getElementsByClassName('.board__card-info-count-of-tasks');
    input = document.getElementById("board__card-search");
    filter = input.value.toUpperCase().trim();
    ul = document.getElementById("board__card-todo-items");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        task = li[i].textContent || task.innerText;
        if (task.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}


searchInput.addEventListener('input', search);