import { put, takeEvery } from 'redux-saga/effects';
import { CHANGE_INPUT } from '../../redux/actions';
import { ACTION_FILTER_INPUT_LIST } from './actions';

export function* inputChanged(action) {
  yield put(ACTION_FILTER_INPUT_LIST(action.payload));
}

export function* watcherInput() {
  yield takeEvery(CHANGE_INPUT, inputChanged);
}
