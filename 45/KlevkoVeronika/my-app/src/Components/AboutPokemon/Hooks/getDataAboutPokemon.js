import { useHistory, useLocation } from 'react-router-dom';

export const getDataAboutPokemon = () => {
  const history = useHistory();
  const { state } = useLocation();

  const handleClick = () => {
    history.goBack();
  };

  return [handleClick, state];
};
