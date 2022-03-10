import { getDetails } from '../../services/api/api';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ACTION_GET_DETAILS_FAILED,
  ACTION_GET_DETAILS_REQUESTED,
  ACTION_GET_DETAILS_SUCCEED,
} from './actions';
import { GET_POKEMON_DETAILS } from '../../redux/actions';

export function* getPokemonDetailsSaga(action) {
  try {
    yield put(ACTION_GET_DETAILS_REQUESTED());
    const data = yield call(() => {
      return getDetails(action.payload);
    });
    yield put(ACTION_GET_DETAILS_SUCCEED(data));
  } catch (error) {
    yield put(ACTION_GET_DETAILS_FAILED(error));
  }
}

export function* watcherPokemonDetails() {
  yield takeEvery(GET_POKEMON_DETAILS, getPokemonDetailsSaga);
}
