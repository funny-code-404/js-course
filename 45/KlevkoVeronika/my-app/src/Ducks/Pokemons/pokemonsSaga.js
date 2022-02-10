import { put, takeLatest, call } from 'redux-saga/effects';
import {
  ACTION_GET_POKEMONS_FAILED,
  GET_POKEMONS_REQUESTED,
  ACTION_GET_SCOPE_DATA,
} from './actions';

import { api } from '../../Api/api';

const API = api();

export function* getPokemonsSaga(action) {
  try {
    const data = yield call(API.get, action.payload);
    yield put(ACTION_GET_SCOPE_DATA(data));
  } catch (e) {
    yield put(ACTION_GET_POKEMONS_FAILED(e.message));
  }
}

export function* pokemonsSaga() {
  yield takeLatest(GET_POKEMONS_REQUESTED, getPokemonsSaga);
}
