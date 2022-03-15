import { useDispatch } from "react-redux";
import { GET_POKEMONS_REQUESTED } from "../../../ducks/pokemons/reducer";

export const useGetPokemons = () => {
  const dispatch = useDispatch();

  const getPokemonNames = () => {
    dispatch(
      GET_POKEMONS_REQUESTED(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`
      )
    );
  };

  return getPokemonNames;
};
