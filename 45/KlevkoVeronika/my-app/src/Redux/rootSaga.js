import { all } from 'redux-saga/effects';
import { pokemonsSaga } from '../Ducks/Pokemons/pokemonsSaga';
import { scopeDataSaga } from '../Ducks/Pokemons/scopeDataSaga';

export default function* rootSaga() {
  yield all([pokemonsSaga(), scopeDataSaga()]);
}
