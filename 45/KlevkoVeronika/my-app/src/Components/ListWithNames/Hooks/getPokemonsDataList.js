import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { pokemonsDataSelector } from '../../../Ducks/Pokemons/selectors';
import { getNamePokemon } from './getNamePokemon';
import { getAbilitiesPokemon } from './getAbilitiesPokemon';

export const getPokemonsDataList = () => {
  const pokemonsData = useSelector(pokemonsDataSelector);
  const pokemonsDataArr = pokemonsData || [];

  return pokemonsDataArr.map((item) => (
    <div className="info_pokemon" key={item.name}>
      <h2 className="name_pokemon">{getNamePokemon(item)}</h2>
      <Link
        className="link"
        to={{
          pathname: `/aboutPokemon/${item.name}`,
          state: {
            name: item.name,
            src: item.image,
            egg_groups: item.egg_groups,
            color: item.color,
            height: item.height,
            weight: item.weight,
            abilities: item.abilities,
          },
        }}
      >
        <img src={item.image} alt="" />

        <div>Height: {item.height * 10} cm.</div>
        <div>Weight: {item.weight / 10} kg.</div>
        <div>
          Abilities:
          {getAbilitiesPokemon(item)}
        </div>
      </Link>
    </div>
  ));
};
