import { useDispatch } from 'react-redux';
import { ACTION_DELETE_TASK } from '../../ducks/todo';

export const ButtonDelete = ({ idprop }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      ACTION_DELETE_TASK({
        id: idprop,
      })
    );
  };

  return <button onClick={handleClick}>Delete</button>;
};
