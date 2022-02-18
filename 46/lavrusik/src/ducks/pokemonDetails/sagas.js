import { takeLatest, put,call } from "redux-saga/effects";
import {
    GET_DETAILS_POKEMON,
    ACTION_GET_DETAILS_POKEMON_FAILED,
    ACTION_GET_DETAILS_POKEMON_SUCCEED
    
} from './actions';
import { api } from "../../api/api";
const API = api();
export function* getPokemonDetailsSaga(action) {
    const url = `https://pokeapi.co/api/v2/pokemon/${action.payload+1}`;
    try{
        const data = yield call(API.get,url);
        yield put(ACTION_GET_DETAILS_POKEMON_SUCCEED(data));
    }
    catch (e) {
        console.log(e.message);
        yield put(ACTION_GET_DETAILS_POKEMON_FAILED(e.message));
    }
}
export function* pokemonDetailsSaga() {
    yield takeLatest(GET_DETAILS_POKEMON,getPokemonDetailsSaga)
}