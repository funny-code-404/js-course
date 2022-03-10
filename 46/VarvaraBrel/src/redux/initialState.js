import { initialPokemonListState } from '../ducks/list/reducer';
import { initialPokemonDetailsState } from '../ducks/details/reducer';

const initialState = {
  list: initialPokemonListState,
  details: initialPokemonDetailsState,
};

export default initialState;
