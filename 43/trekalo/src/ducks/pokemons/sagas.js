import { put, takeLatest } from "redux-saga/effects";
import { GET_POKEMONS_REQUESTED, ACTION_GET_POKEMONS_SECCEED } from "./actions";
//
export function* getPokemonsSaga(action) {
  const res = yield fetch(action.payload);
  const { results } = yield res.json();

  let pokemonsData = [];
  const pokemonsPromiseArr = results.map(({ url }) => fetch(url));
  yield Promise.all(pokemonsPromiseArr) // TODO: попробовать переписать на yield all([])
    .then((res) => res.map((data) => data.json()))
    .then((res) =>
      Promise.all(res).then(
        (data) => (pokemonsData = [...pokemonsDataMap(data)])
      )
    );

  yield put(ACTION_GET_POKEMONS_SECCEED(pokemonsData));
}
//
export function* pokemonsSaga() {
  yield takeLatest(GET_POKEMONS_REQUESTED, getPokemonsSaga);
}
//
function pokemonsDataMap(arr) {
  return arr.map(({ name, id, sprites }) => {
    return { name, id, src: sprites.front_default };
  });
}
