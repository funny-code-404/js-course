import { InputSearch } from '../InputSearch';
import { ListWithNames } from '../ListWithNames/index';
import { getListAboutPokemons } from './Hooks/getListAboutPokemons';

export const DataListAboutPokemons = ({ url }) => {
  const [handleClick] = getListAboutPokemons(url);

  return (
    <>
      {' '}
      <header className="header">
        <h2 className="header_name">Pokemons</h2>
        <button className="btn_get_pokemons" onClick={handleClick}>
          GET
        </button>
      </header>
      <InputSearch />
      <ListWithNames />
    </>
  );
};
