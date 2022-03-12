import { all } from "redux-saga/effects";
import { pokemonsSaga } from "../ducks/pokemons/sagas";
import { pokemonDetailsSaga } from "../ducks/pokemonDetails/sagas";

export default function* rootSaga() {
  yield all([pokemonsSaga(), pokemonDetailsSaga()]);
}
