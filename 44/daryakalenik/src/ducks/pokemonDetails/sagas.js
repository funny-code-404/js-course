import { takeLatest, put } from "redux-saga/effects";
import {
  GET_POKEMONS_DETAILS_REQUESTED,
  ACTION_GET_POKEMONS_DETAILS_SUCCEEDED,
  ACTION_GET_POKEMONS_DETAILS_FAILED,
} from "./actions";

export function* getPokemonSaga(action) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(ACTION_GET_POKEMONS_DETAILS_SUCCEEDED(data));
  } catch (e) {
    yield put(ACTION_GET_POKEMONS_DETAILS_FAILED(e.message));
  }
}

export function* pokemonDetailsSaga() {
  yield takeLatest(GET_POKEMONS_DETAILS_REQUESTED, getPokemonSaga);
}
