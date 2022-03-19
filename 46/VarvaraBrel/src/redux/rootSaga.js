import { all } from 'redux-saga/effects';
import { watcherPokemonList } from '../ducks/list/saga';
import { watcherPokemonDetails } from '../ducks/details/saga';
import { watcherImage } from '../ducks/listImages/saga';
import { watcherInput } from '../ducks/input/saga';

export function* rootSaga() {
  yield all([
    watcherPokemonList(),
    watcherImage(),
    watcherPokemonDetails(),
    watcherInput(),
  ]);
}
