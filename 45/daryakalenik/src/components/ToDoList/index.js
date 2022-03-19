import { useContext } from "react";
import { useEffect, useRef } from "react";
import { database } from "../../firebase/firebase";
import { DataContext } from "../../context/dataContext";

function ToDoList() {
  const data = useContext(DataContext);
  console.log(data);

  const taskRef = useRef();

  useEffect(() => {
    taskRef.current = database().ref("/todos");
  }, []);

  const handleClick = (e) => {
    const todoId = e.target.id;
    taskRef.current.child(todoId).remove();
  };
  return (
    <ul>
      {data
        ? Object.values(data).map((item) => {
            return (
              <li key={item.id}>
                {item.todo}{" "}
                <button id={item.id} onClick={handleClick}>
                  X
                </button>
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default ToDoList;
