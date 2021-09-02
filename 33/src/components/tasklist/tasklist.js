const addButton = document.getElementById("submit");
const removeButton = document.getElementById("remove-button");
const taskList = document.getElementById("list");
const inputText = document.getElementById("taskText");

    addButton.addEventListener("click", addNewTask); 
    removeButton.addEventListener("click", deleteAll);
    taskList.addEventListener("click", completeAndDelete);

function deleteAll () {
    taskList.innerHTML = "";
}

function completeAndDelete (e) {
    let item = e.target;
    if (item.classList[0] === "fas") {
        item = item.parentElement;
    }
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
        return;
    }

    if (item.classList[0] === "list-item") {
        item.classList.toggle("completedItem");
    }
}

function addNewTask () {
    const newTask = inputText.value;
    inputText.value = "";
    const listItem = document.createElement("li");
    listItem.append(newTask);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    listItem.appendChild(deleteButton);

    listItem.classList.add("list-item");
    taskList.appendChild(listItem);
}