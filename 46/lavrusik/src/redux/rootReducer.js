import { pokemonListReducer } from '../ducks/pokemonList/reducer';
import { pokemonDetailsReducer } from '../ducks/pokemonDetails/reducer';

const rootReducer = {
  list: pokemonListReducer,
  details: pokemonDetailsReducer,
};

export default rootReducer;
