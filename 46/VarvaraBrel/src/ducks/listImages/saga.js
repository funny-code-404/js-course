import { getImage } from '../../services/api/api';
import { put, call, take, select, all } from 'redux-saga/effects';
import {
  ACTION_GET_IMAGE_REQUESTED,
  ACTION_GET_IMAGE_SUCCEED,
  ACTION_GET_IMAGE_FAILED,
} from './actions';
import { GET_LIST_SUCCEED } from '../list/actions';

export function* watcherImage() {
  while (true) {
    yield take(GET_LIST_SUCCEED);
    yield call(imagesRequest);
  }
}

export function* imagesRequest() {
  const urlData = yield select((state) => state.list.data);
  yield all(
    urlData.map((item) => {
      return call(uploadSingleImage, item.url);
    })
  );
}

export function* uploadSingleImage(file) {
  try {
    yield put(ACTION_GET_IMAGE_REQUESTED());
    const response = yield call(() => {
      return getImage(file);
    });
    yield put(ACTION_GET_IMAGE_SUCCEED(response));
  } catch (error) {
    yield put(ACTION_GET_IMAGE_FAILED(error));
  }
}
