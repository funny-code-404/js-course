import { api } from './api';
const API = api();

export const pokemonApi = {
  getPokemon: async (url) => {
    const res = await API.get(url);

    const otherRes = await API.get(res.species.url);

    const data = {
      image: res.sprites.front_default,
      height: res.height,
      weight: res.weight,
      abilities: res.abilities.map((item) => item.ability.name),
      name: res.name,
      egg_groups: otherRes.egg_groups.map((item) => item.name),
      color: otherRes.color.name,
    };
    return data;
  },
};
