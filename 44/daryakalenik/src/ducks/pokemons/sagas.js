import { takeLatest, put } from "redux-saga/effects";
import {
  GET_POKEMONS_REQUESTED,
  GET_POKEMONS_SUCCEEDED,
  GET_POKEMONS_FAILED,
  pokemonReducer,
} from "./reducer";

export function* getPokemonSaga(action) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(GET_POKEMONS_SUCCEEDED(data));
  } catch (e) {
    yield put(GET_POKEMONS_FAILED(e));
  }
}

export function* pokemonsSaga() {
  yield takeLatest(GET_POKEMONS_REQUESTED, getPokemonSaga);
}
