import {takeLatest, put, call} from 'redux-saga/effects'
import {
    ACTION_GET_DATA_FAILED,
    ACTION_GET_DATA_LIST_SUCCEED,
    GET_DATA_LIST_REQUESTED
} from "./actions";
import {getDataForListPokemons} from "./getDataForListPokemons";

export function* getPokemonsListSaga(action) {
    try{
        const res = yield fetch(action.payload);
        const data = yield res.json();
        const dataPokemons = yield call(getDataForListPokemons, data.results)
        yield put(ACTION_GET_DATA_LIST_SUCCEED(dataPokemons))

    } catch (error) {
        yield put(ACTION_GET_DATA_FAILED(error.message))
    }
}

export function* pokemonsSaga() {
    yield takeLatest(GET_DATA_LIST_REQUESTED, getPokemonsListSaga)
}

