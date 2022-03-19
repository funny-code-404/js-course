import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPokemonInfo(id, setPokemonData);
  }, []);
  return (
    <div>
      {pokemonData.map((item) => {
        return (
          <div key={item.id}>
            <p>Способости: {item.abilities}</p>
            <p>Движения: {item.moves}</p>
            <p>Тип: {item.types}</p>
          </div>
        );
      })}
    </div>
  );
};
async function getPokemonInfo(pokemonId, setState) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  const data = await res.json();
  setState(pokemonInfoMaker(data));
}

function pokemonInfoMaker(obj) {
  return [
    {
      id: obj.id,
      abilities: obj.abilities.map((item) => item.ability.name).join(),
      moves: obj.moves.map((item) => item.move.name).join(),
      types: obj.types.map((item) => item.type.name).join(),
    },
  ];
}
