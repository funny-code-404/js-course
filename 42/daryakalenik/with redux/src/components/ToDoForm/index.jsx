import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ToDoForm() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state;
  });
  const [toDoItem, setToDoItem] = useState(``);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: toDoItem });
    setToDoItem(``);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Number of tasks:{value.length}</h3>
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
