export const getNamePokemon = (item) => {
  return item.name.charAt(0).toUpperCase() + item.name.slice(1);
};
