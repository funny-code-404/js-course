import { useSelector } from 'react-redux';
import { ButtonDelete } from './deleteButton';
import { EditTask } from './editTask';
import { getValueSelector } from '../../ducks/todo';
import SelectPriority from './prioritySelect';
import './style.css';

const ListBlock = () => {
  const data = useSelector(getValueSelector);

  return (
    <ul>
      <h3>Tasks To Do</h3>
      {data.map((data) => (
        <li key={data.id}>
          <p className={data.priority}>{data.text}</p>
          <ButtonDelete idprop={data.id} />
          <SelectPriority idprop={data.id} />
          <EditTask idprop={data.id} />
        </li>
      ))}
    </ul>
  );
};

export default ListBlock;
