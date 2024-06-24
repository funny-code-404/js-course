import { Link } from "react-router-dom";
import { usePokemonsData } from "../../ducks/pokemons/hooks";

export const PokemonsList = ({ url }) => {
  const { pokemonsData, paginationIndexPageHandler } = usePokemonsData(url);
  return (
    <div>
      {pokemonsData.map(({ name, id, src }) => {
        return (
          <div key={id}>
            <Link to={`/pokemon/${id}`}>
              {name} <img src={src} alt="pic" />
            </Link>
          </div>
        );
      })}
      <button onClick={paginationIndexPageHandler} id="prev">
        prevPage
      </button>
      <button onClick={paginationIndexPageHandler} id="next">
        nextPage
      </button>
    </div>
  );
};
