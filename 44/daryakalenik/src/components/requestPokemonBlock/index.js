import { useGetPokemons } from "./hooks/useGetPokemons";

const RequestPokemonBlock = () => {
  const getPokemonNames = useGetPokemons();
  return (
    <div>
      <button onClick={getPokemonNames}>Get Pokemons</button>
    </div>
  );
};

export default RequestPokemonBlock;

// https://pokeapi.co/api/v2/pokemon
