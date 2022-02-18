import { takeLatest, put,call } from "redux-saga/effects";
import {
    GET_LIST_POKEMON,
    ACTION_GET_LIST_POKEMON_FAILED,
    ACTION_GET_LIST_POKEMON_SUCCEED,
} from './actions';
import { api } from "../../api/api";
const API = api();
export function* getPokemonListSaga(action) {
    try{
        const data = yield call(API.get, action.payload);
        yield put(ACTION_GET_LIST_POKEMON_SUCCEED(data.results));
    }
    catch (e) {
        yield put(ACTION_GET_LIST_POKEMON_FAILED(e.message));
    }
}
export function* pokemonListSaga() {
    yield takeLatest(GET_LIST_POKEMON,getPokemonListSaga)
}