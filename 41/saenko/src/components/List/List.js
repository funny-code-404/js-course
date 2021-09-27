import { useContext } from "react";
import TodoListContext from "../../context/createContext";

const List = () => {
    const { todoList, removeTodoItem, markAsCompleted } = useContext(TodoListContext);
    return (
      <ul>
        {todoList.map((todoItem, i) => (
          <li
            className={todoItem.completed ? "completed" : ""}
            key={todoItem.id}
            onClick={() => markAsCompleted(todoItem.id)}
          >
            {todoItem.label}
            <button
              className="delete"
              onClick={() => removeTodoItem(todoItem.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
}

export default List;