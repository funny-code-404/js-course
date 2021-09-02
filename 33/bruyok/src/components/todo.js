const todoList = document.getElementById("todoList");
const addTask = document.getElementById("buttonAdd");
const removeAll = document.getElementById("buttonRemoveAll");

//  добавить задачу
addTask.addEventListener("click", function () {
  const newTask = prompt("New task:");

  todoList.insertAdjacentHTML(
    "afterbegin",
    `<li>
   ${newTask}
   <span class="todo-trash"><i class="fas fa-trash-alt"></i></span>`
  );
});

// удалить все задачи
removeAll.addEventListener("click", () => (todoList.innerHTML = ""));

//добавляем или удаляем класс done если нажали на li, а если нажали на иконку (i) -- удаляем li этой иконки
todoList.addEventListener("click", function (event) {
  console.log(event.target.tagName);
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  } else if (event.target.tagName == "path") {
    event.target.parentElement.parentElement.parentElement.remove();
  } else if (event.target.tagName == "svg") {
    event.target.parentElement.parentElement.remove();
  }
});
