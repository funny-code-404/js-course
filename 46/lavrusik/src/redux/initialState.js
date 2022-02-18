import { initialPokemonListState } from '../ducks/pokemonList/reducer';
import { initialPokemonDetailsState } from '../ducks/pokemonDetails/reducer';

const initialState = {
  list: initialPokemonListState,
  details: initialPokemonDetailsState,
};

export default initialState;
