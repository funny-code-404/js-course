import {all} from 'redux-saga/effects'
import { pokemonListSaga } from '../ducks/pokemonList/sagas';
import { pokemonDetailsSaga } from '../ducks/pokemonDetails/sagas';

export default function* rootSaga() {
    yield all([
        pokemonDetailsSaga(),
        pokemonListSaga(),
    ]);
}











