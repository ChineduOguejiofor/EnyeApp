import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchImages, adduserToDb } from '../api';
import { addUser, setErrors, addToState } from '../actions/users';
import { ADD_DATA } from '../actions/types';
// function* incrementOne() {
//   try {
//     const images = yield call(fetchImages, 1);
//     yield put(addUser(images));
//   } catch (error) {
//     yield put(setErrors(error.toString()));
//   }
// }
function* uploadtoDB(payload) {
  const result = yield call(adduserToDb, payload.payload);
  yield put(addToState(result));
}

export function* watchAgeUp() {
  yield takeEvery(ADD_DATA, uploadtoDB);
}
