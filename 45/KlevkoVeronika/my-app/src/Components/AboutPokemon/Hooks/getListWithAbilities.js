export const getListWithAbilities = (state) => {
  return state.abilities.map((item) => <li key={item}>{item}</li>);
};
