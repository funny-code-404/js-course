import { useContext } from 'react';
import { ReducerContext } from '../../ducks/reducer/Reducer';
import { ButtonDelete, ButtonEdit } from './button';

const TextBlock = () => {
  const MyContext = useContext(ReducerContext);
  const state = MyContext.state;

  return (
    <ul>
      <h3>Tasks To Do</h3>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.text}</p>
          <ButtonDelete idprop={el.id} />
          <ButtonEdit idprop={el.id} />
        </li>
      ))}
    </ul>
  );
};

export default TextBlock;
