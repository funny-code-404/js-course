import { useGetPokemonsDetails } from "./hooks/useGetPokemonsDetails";

const PokemonDetailsBlock = () => {
  const { pokemonName, navigate, pokemonDetails, abilities, sprite } =
    useGetPokemonsDetails();
  return (
    <div>
      <h1>{pokemonName}</h1>
      <p>Base experience: {pokemonDetails.base_experience}</p>
      <div>
        <p>Abilities:</p>
        {abilities &&
          abilities.map((ability, index) => {
            return <p key={index}>{ability.ability.name}</p>;
          })}
        <img src={sprite} />
      </div>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PokemonDetailsBlock;
