import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_EDIT_TASK, getValueSelector } from '../../ducks/todo';

export const EditTask = ({ idprop }) => {
  const dispatch = useDispatch();
  const allValues = useSelector(getValueSelector);

  const [showEditInput, setShowEditInput] = useState(false);
  const [value, setValue] = useState('');

  const todoItem = allValues.find((el) => el.id === idprop);

  const handleClick = () => {
    setShowEditInput(!showEditInput);
    setValue(todoItem.text);
  };

  const handleEditChange = (e) => {
    setValue(e.target.value);
  };

  const handleClickDoneEdit = () => {
    dispatch(
      ACTION_EDIT_TASK({
        id: todoItem.id,
        text: value,
      })
    );
    setShowEditInput(!showEditInput);
  };

  return (
    <>
      {!showEditInput && <button onClick={handleClick}>Edit</button>}
      {showEditInput && (
        <div>
          <input onChange={handleEditChange} value={value} />
          <button onClick={handleClickDoneEdit}>Done</button>
        </div>
      )}
    </>
  );
};
