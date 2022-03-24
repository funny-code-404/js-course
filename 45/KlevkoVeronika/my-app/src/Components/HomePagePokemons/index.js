import { DataListAboutPokemons } from '../DataListAboutPokemons/index';

export const HomePagePokemons = () => {
  return (
    <DataListAboutPokemons url="https://pokeapi.co/api/v2/pokemon/?offset=20&limit=104" />
  );
};
