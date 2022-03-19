import { useToDoContext } from "../../providers/ToDoProvider";

function ListOfTasks() {
  const { toDoList, removeToDo } = useToDoContext();

  return (
    <ul>
      {toDoList.map((todo, index) => (
        <li key={index}>
          {todo}
          <button
            onClick={() => {
              removeToDo(index);
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListOfTasks;
