import { useNavigate, useParams } from "react-router-dom";
import { useSelector} from "react-redux";

const PokemonDetailsBlock = () => {
  const pokemonName = useParams().name;
  const navigate = useNavigate();
  const pokemonDetails = useSelector((store) => {
    return store.details.data;
  });
  console.log(pokemonDetails);
  const abilities = pokemonDetails.abilities;
  const sprite = pokemonDetails.sprites?.front_default;
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
