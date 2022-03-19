import { useEffect, useRef, useState } from 'react';
import { database } from '../../../context/firebase';

const ButtonEdit = ({ id }) => {
  const [value, setValue] = useState({
    id: id,
    task: '',
  });
  const [showInput, setShowInput] = useState(false);

  const taskRef = useRef();

  useEffect(() => {
    taskRef.current = database().ref('/todoList');
  }, []);

  const handleClickEdit = () => {
    console.log(showInput);
    setShowInput(!showInput);
  };

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, task: e.target.value }));
  };

  const handleClickEditDone = () => {
    taskRef.current.child(value.id).set(value);
    setShowInput(!showInput);
  };

  return (
    <div>
      {!showInput && <button onClick={handleClickEdit}>Edit</button>}{' '}
      {showInput && (
        <div>
          <input onChange={handleChange} />
          <button onClick={handleClickEditDone}>Done</button>
        </div>
      )}
    </div>
  );
};

export default ButtonEdit;
