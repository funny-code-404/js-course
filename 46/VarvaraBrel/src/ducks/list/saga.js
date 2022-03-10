import { getList } from '../../services/api/api';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ACTION_GET_LIST_FAILED,
  ACTION_GET_LIST_REQUESTED,
  ACTION_GET_LIST_SUCCEED,
} from './actions';

import { GET_POKEMON_LIST } from '../../redux/actions';

export function* getPokemonListSaga() {
  try {
    yield put(ACTION_GET_LIST_REQUESTED());
    const data = yield call(() => {
      return getList();
    });
    const fixedData = data.map((el) => {
      return { ...el, isDisabled: false };
    });
    yield put(ACTION_GET_LIST_SUCCEED(fixedData));
  } catch (error) {
    yield put(ACTION_GET_LIST_FAILED(error));
  }
}

export function* watcherPokemonList() {
  yield takeEvery(GET_POKEMON_LIST, getPokemonListSaga);
}
