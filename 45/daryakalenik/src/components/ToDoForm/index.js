import { useState, useEffect, useRef } from "react";
import { database } from "../../firebase/firebase";

function ToDoForm() {
  const [values, setValues] = useState({ id: ``, todo: `` });

  const taskRef = useRef();

  const idMaker = Math.floor(Math.random() * 10000);

  useEffect(() => {
    taskRef.current = database().ref(`/todos`);
  }, []);

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      todo: e.target.value,
      id: idMaker,
    }));
  };

  const handleClick = () => {
    taskRef.current.child(values.id).set(values);
    setValues({ id: ``, todo: `` });
  };

  return (
    <div>
      <h1>To do list</h1>
      <input
        onChange={handleChange}
        value={values.todo}
        placeholder="Enter your task"
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default ToDoForm;
