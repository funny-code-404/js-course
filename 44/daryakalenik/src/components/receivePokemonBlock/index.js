import { useGetPokemonsNames } from "./hooks/useGetPokemonsNames";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./styles.css";

const ReceivePokemonBlock = () => {
  const { pokemon, fetchPokemonDetails } = useGetPokemonsNames();
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
                onClick={fetchPokemonDetails}
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
