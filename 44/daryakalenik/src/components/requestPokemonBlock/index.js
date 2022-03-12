import { useDispatch } from "react-redux";
import { GET_POKEMONS_REQUESTED } from "../../ducks/pokemons/actions";

const RequestPokemonBlock = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: GET_POKEMONS_REQUESTED,
      payload: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`,
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Get Pokemons</button>
    </div>
  );
};

export default RequestPokemonBlock;

// https://pokeapi.co/api/v2/pokemon
