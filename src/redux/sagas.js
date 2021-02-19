import { call, put, takeEvery } from 'redux-saga/effects'
import API from 'src/res/API.js';

export function* watchFetchImages() {
  yield takeEvery('FETCHED_IMAGES', fetchImagesAsync);
}

export function* fetchImagesAsync() {
  try {
    yield put({ type: 'REQUESTED_IMAGES' });
    const data = yield call(() => {
      return fetch(API.API_IMAGES)
              .then(res => res.json())
      }
    );
    yield put({ type: 'REQUESTED_IMAGES_SUCCEEDED', images: data });
  } catch (error) {
    yield put({ type: 'REQUESTED_IMAGES_FAILED', error });
  }
}