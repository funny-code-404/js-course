import { useSelector, useDispatch } from "react-redux";
import { GET_POKEMONS_DETAILS_REQUESTED } from "../../ducks/pokemonDetails/actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./styles.css";

const ReceivePokemonBlock = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => {
    return store.data.data.results;
  });
  const handleClick = (e) => {
    const url = pokemon[e.target.id].url;
    dispatch({
      type: GET_POKEMONS_DETAILS_REQUESTED,
      payload: url,
    });
  };
  return (
    <div>
      {pokemon
        ? pokemon.map((pokemon, index) => {
            return (
              <Link
                to={`/${pokemon.name}`}
                key={index}
                id={index}
                className="pokemon-name"
                onClick={handleClick}
              >
                {pokemon.name}
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default ReceivePokemonBlock;
