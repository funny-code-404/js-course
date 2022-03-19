import { useContext, useState } from 'react';
import {
  ReducerContext,
  ACTION_CREATE_TASK,
} from '../../ducks/reducer/Reducer';

const InputForm = () => {
  const MyContext = useContext(ReducerContext);

  const [id, setId] = useState(0);
  const [val, setVal] = useState('');

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleClick = () => {
    setId((prev) => prev + 1);
    MyContext.dispatch(
      ACTION_CREATE_TASK({
        id: id,
        text: val,
      })
    );
    setVal('');
  };

  return (
    <div>
      <h3>Write Task</h3>
      <input onChange={handleChange} value={val} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputForm;
