export const getEggGroup = (state) => {
  return state.egg_groups.map((item) => <li key={item}>{item}</li>);
};
