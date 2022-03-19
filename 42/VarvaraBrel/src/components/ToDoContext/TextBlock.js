import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const TextBlock = () => {
  const MyContext = useContext(DataContext);
  const labels = MyContext.data.label;

  return (
    <ul>
      <h3>Tasks To Do</h3>
      {labels.length > 0 &&
        labels.map((label) => (
          <li key={label}>
            <p>{label}</p>
          </li>
        ))}
    </ul>
  );
};

export default TextBlock;
