import { useDispatch } from 'react-redux';
import { ACTION_SET_TASK } from '../../ducks/todo';

const InputForm = () => {
  const dispatch = useDispatch();
  let nextToDoId = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      ACTION_SET_TASK({
        id: nextToDoId++,
        text: e.target.elements.task.value,
        priority: null,
      })
    );
    e.target.elements.task.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Write Task</h3>
      <input name="task" />
      <button>Add Task</button>
    </form>
  );
};

export default InputForm;
