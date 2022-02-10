import { api } from './api';
const API = api();

export const pokemonApi = {
  getPokemon: async (url) => {
    const res = await API.get(url);

    const otherRes = await API.get(res.species.url);

    // const genderUrl = `https://pokeapi.co/api/v2/gender/${res.id}`; ОШИБКА - НЕ ПОЛУЧАЕТ ДАННЫЕ
    // const gender = await API.get(genderUrl);
    // console.log(gender);

    // const habitatUrl = `https://pokeapi.co/api/v2/pokemon-habitat/${res.id}`; //ОШИБКА - НЕ ПОЛУЧАЕТ ДАННЫЕ
    // const habitat = await API.get(habitatUrl);
    // console.log(habitat);

    const data = {
      image: res.sprites.front_default,
      height: res.height,
      weight: res.weight,
      abilities: res.abilities.map((item) => item.ability.name),
      name: res.name,
      egg_groups: otherRes.egg_groups.map((item) => item.name),
      color: otherRes.color.name,
      // gender: gender.name,
      // 1: habitat.name
    };
    return data;
  },
};
