import { takeLatest, take, call, put, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { adduserToDb } from '../actions/users';
import { ADD_DATA, USER_ADDED, FETCH_ERROR } from '../actions/types';
// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
firebase.initializeApp({
  databaseURL: 'https://enye-71334.firebaseio.com/'
});
const db = firebase.database().ref('entries/');

function* handleEvent() {
  const channel = new eventChannel(emitter => {
    const listener = db.on('value', snapshot => {
      emitter({
        data: snapshot.val() || {}
      });
    });

    return () => {
      listener.off();
    };
  });

  while (true) {
    try {
      const { data } = yield take(channel);
      const allData = yield Object.keys(data).map(key => data[key]);

      if (allData.length > 0) {
        yield put({
          type: USER_ADDED,
          payload: allData
        });
      }
    } catch (error) {
      yield put({
        type: FETCH_ERROR,
        payload: error.toString()
      });
    }
  }
}

function* uploadtoDB(payload) {
  yield call(adduserToDb, payload.payload);
}

export function* watchAgeUp() {
  yield fork(handleEvent);
  yield takeLatest(ADD_DATA, uploadtoDB);
}
