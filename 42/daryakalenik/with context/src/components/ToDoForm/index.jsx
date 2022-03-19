import { useState } from "react";
import { useToDoContext } from "../../providers/ToDoProvider";

function ToDoForm() {
  const { toDoList, addToDo } = useToDoContext();
  const [toDoItem, setToDoItem] = useState(``);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toDoItem) {
      return;
    }
    addToDo(toDoItem);
    setToDoItem(``);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Number of tasks:{toDoList.length}</h3>
        <input
          type="text"
          placeholder="Enter your task"
          value={toDoItem}
          onChange={(e) => setToDoItem(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ToDoForm;
