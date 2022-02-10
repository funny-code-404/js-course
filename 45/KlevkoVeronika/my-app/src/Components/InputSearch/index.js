import { useDispatch } from 'react-redux';
import { ACTION_FIND_POKEMON } from '../../Ducks/Pokemons/actions';

export const InputSearch = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(ACTION_FIND_POKEMON(e.target.value));
  };

  return (
    <input
      className="input_search"
      placeholder="search"
      onChange={handleChange}
    />
  );
};
