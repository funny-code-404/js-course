import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_ADD_PRIORITY } from '../../ducks/todo';

const SelectPriority = ({ idprop }) => {
  const dispatch = useDispatch();
  const [showPriornput, setShowPriorInput] = useState(false);

  const onChangeValue = (e) => {
    console.log(e.target.value);
    dispatch(ACTION_ADD_PRIORITY({ id: idprop, priority: e.target.value }));
    setShowPriorInput(!showPriornput);
  };

  const handlerClick = () => {
    setShowPriorInput(!showPriornput);
  };
  return (
    <>
      <button onClick={handlerClick}>Priority</button>
      {showPriornput && (
        <div onChange={onChangeValue}>
          <input type="radio" name="priority" value="high" /> high
          <input type="radio" name="priority" value="medium" /> medium
          <input type="radio" name="priority" value="low" /> low
        </div>
      )}
    </>
  );
};

export default SelectPriority;
