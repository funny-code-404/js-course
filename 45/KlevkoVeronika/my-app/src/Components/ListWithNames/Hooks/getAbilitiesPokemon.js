export const getAbilitiesPokemon = (item) => {
  return item.abilities.map((item) => (
    <ul>
      <li key={item}>{item}</li>
    </ul>
  ));
};
