import { getPokemonsDataList } from './Hooks/getPokemonsDataList';

export const ListWithNames = () => {
  return (
    <>
      <div className="list_pokemons">{getPokemonsDataList()}</div>
    </>
  );
};
