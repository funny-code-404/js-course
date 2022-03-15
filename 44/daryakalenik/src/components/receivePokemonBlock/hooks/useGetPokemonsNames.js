import { useSelector, useDispatch } from "react-redux";
import { GET_POKEMONS_DETAILS_REQUESTED } from "../../../ducks/pokemonDetails/actions";

export const useGetPokemonsNames = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => {
    return store.data.data.results;
  });

  const fetchPokemonDetails = (e) => {
    const url = pokemon[e.target.id].url;
    dispatch({
      type: GET_POKEMONS_DETAILS_REQUESTED,
      payload: url,
    });
  };

  return { pokemon, fetchPokemonDetails };
};
