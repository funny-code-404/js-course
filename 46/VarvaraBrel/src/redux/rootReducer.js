import { pokemonDetailsReducer } from '../ducks/details/reducer';
import { pokemonListReducer } from '../ducks/list/reducer';

const rootReducer = {
  list: pokemonListReducer,
  details: pokemonDetailsReducer,
};

export default rootReducer;
