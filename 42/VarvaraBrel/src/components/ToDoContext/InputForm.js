import { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';

const InputForm = () => {
  const MyContext = useContext(DataContext);
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    MyContext.setData({
      label: inputData,
    });
  };

  return (
    <div>
      <h3>Write Task</h3>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputForm;
