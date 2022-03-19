import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const useGetPokemonsDetails = () => {
  const pokemonName = useParams().name;
  const navigate = useNavigate();
  const pokemonDetails = useSelector((store) => {
    return store.details.data;
  });
  const abilities = pokemonDetails.abilities;
  const sprite = pokemonDetails.sprites?.front_default;
  return { pokemonName, navigate, pokemonDetails, abilities, sprite };
};
