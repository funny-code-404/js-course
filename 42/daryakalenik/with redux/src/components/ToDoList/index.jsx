import { useDispatch, useSelector } from "react-redux";

function ListOfTasks() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.todos;
  });
  const handleClick = (e) => {
    dispatch({ type: "DELETE_TODO", payload: e.target.id });
  };
  return (
    <ul>
      {value.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={handleClick} id={index}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListOfTasks;
