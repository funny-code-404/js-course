import { useEffect, useRef } from 'react';
import { database } from '../../../context/firebase';

const ButtonDelete = ({ id }) => {
  const taskRef = useRef();

  useEffect(() => {
    taskRef.current = database().ref('/todoList');
  }, []);

  const handleClick = () => {
    taskRef.current.child(id).set(null);
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default ButtonDelete;
