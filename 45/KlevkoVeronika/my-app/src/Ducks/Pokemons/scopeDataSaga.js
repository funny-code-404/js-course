import { put, takeLatest, all } from 'redux-saga/effects';
import {
  ACTION_GET_POKEMONS_FAILED,
  ACTION_GET_POKEMONS_SUCCED,
  GET_SCOPE_DATA,
} from './actions';

import { pokemonApi } from '../../Api/pokemonApi';

export function* getScopeDataSaga(action) {
  try {
    const data = action.payload;
    const res = yield all(
      data.results.map((item) => pokemonApi.getPokemon(item.url))
    );
    yield put(ACTION_GET_POKEMONS_SUCCED(res));
  } catch (e) {
    yield put(ACTION_GET_POKEMONS_FAILED(e.message));
  }
}

export function* scopeDataSaga() {
  yield takeLatest(GET_SCOPE_DATA, getScopeDataSaga);
}
