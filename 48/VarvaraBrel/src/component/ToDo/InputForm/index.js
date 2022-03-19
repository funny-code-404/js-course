import { useEffect, useRef, useState } from 'react';
import { database } from '../../../context/firebase';

const InputForm = () => {
  const [values, setValues] = useState({
    id: '',
    task: '',
  });

  const taskRef = useRef();

  const uniqKey = Math.floor(Math.random() * 1000);

  useEffect(() => {
    taskRef.current = database().ref('/todoList');
  }, []);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, id: uniqKey, task: e.target.value }));
  };

  const handleClick = () => {
    taskRef.current.child(values.id).set(values);
    setValues((prev) => ({ ...prev, task: '' }));
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <label>Write your task </label>
      <input onChange={handleChange} value={values.task} />
      <button onClick={handleClick}>Ok</button>
    </div>
  );
};

export default InputForm;
