import { all } from "redux-saga/effects";
import { pokemonsSaga } from "../ducks/pokemons/sagas";
export function* rootSaga() {
  yield all([pokemonsSaga()]);
}
