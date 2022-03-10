export const pokemonName = (res) => res.data.name;
export const pokemonImage = (res) => ({
  id: res.data.id,
  name: res.data.name,
  image: res.data.sprites.front_default,
});

export const pokemonDetails = (res) => ({
  id: res.data.id,
  name: res.data.name,
  abilities: res.data.abilities,
  moves: res.data.moves,
  types: res.data.types,
  image: res.data.sprites.other.dream_world.front_default,
});
