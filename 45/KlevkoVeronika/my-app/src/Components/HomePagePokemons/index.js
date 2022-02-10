import { DataListAboutPokemons } from '../DataListAboutPokemons/index';

export const HomePagePokemons = () => {
  return (
    <DataListAboutPokemons url="https://pokeapi.co/api/v2/pokemon/?offset=20&limit=104" />
    // <DataListAboutPokemons url="https://corsanywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon" />
  );
};
