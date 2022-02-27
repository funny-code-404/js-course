import { useContext, useState } from 'react';
import {
  ACTION_DELETE_TASK,
  ReducerContext,
  ACTION_EDIT_TASK,
} from '../../ducks/reducer/Reducer';

export const ButtonEdit = ({ idprop }) => {
  const MyContext = useContext(ReducerContext);
  const toDoElem = MyContext.state.find((el) => el.id == idprop);
  const [val, setVal] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleClickEdit = () => {
    setShowInput(!showInput);
    setVal(toDoElem.text);
    return;
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleClickDoneEdit = () => {
    MyContext.dispatch(
      ACTION_EDIT_TASK({
        id: toDoElem.id,
        text: val,
      })
    );
    setShowInput(!showInput);
  };

  return (
    <>
      {!showInput && <button onClick={handleClickEdit}>Edit</button>}
      {showInput && (
        <div>
          <input onChange={handleChange} value={val} />
          <button onClick={handleClickDoneEdit}>Done</button>
        </div>
      )}
    </>
  );
};

export const ButtonDelete = ({ idprop }) => {
  const MyContext = useContext(ReducerContext);

  const handleClickDelete = () => {
    MyContext.dispatch(ACTION_DELETE_TASK(idprop));
  };

  return <button onClick={handleClickDelete}>Delete</button>;
};
