import { useDispatch } from 'react-redux';
import { ACTION_GET_POKEMONS_REQUESTED } from '../../../Ducks/Pokemons/actions';

export const getListAboutPokemons = (url) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_GET_POKEMONS_REQUESTED(url));
  };

  return [handleClick];
};
