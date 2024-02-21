import { call, put, takeLatest } from 'redux-saga/effects';
import { getMe, signOut } from '../../services/authService';
import {
  FETCH_PROFILE,
  setProfileAction,
  DELETE_PROFILE,
} from '../actions/ProfileActions';

export function* handleMe() {
  try {
    const responseMe = yield call(getMe());
    yield put(setProfileAction(responseMe.data.user));
  } catch (err) {
    console.log(err);
  }
}

export function* handleExit() {
  try {
    yield call(signOut());
  } catch (err) {
    console.log(err);
  }
}

export default function* profileWatcher() {
  yield takeLatest(FETCH_PROFILE, handleMe);
  yield takeLatest(DELETE_PROFILE, handleExit);
}
