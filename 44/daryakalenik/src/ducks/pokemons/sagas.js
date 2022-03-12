import { takeLatest, put } from "redux-saga/effects";
import {
  GET_POKEMONS_REQUESTED,
  ACTION_GET_POKEMONS_SUCCEEDED,
  ACTION_GET_POKEMONS_FAILED,
} from "./actions";

export function* getPokemonSaga(action) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(ACTION_GET_POKEMONS_SUCCEEDED(data));
  } catch (e) {
    yield put(ACTION_GET_POKEMONS_FAILED(e.message));
  }
}

export function* pokemonsSaga() {
  yield takeLatest(GET_POKEMONS_REQUESTED, getPokemonSaga);
}
