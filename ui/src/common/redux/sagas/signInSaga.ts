import { call, put, takeLatest } from 'redux-saga/effects';
import { getMe, signIn } from '../../services/authService';
import { setProfileAction } from '../actions/ProfileActions';
import {
  SignInAction,
  signInFailAction,
  signInSuccessAction,
  SIGNIN_LOAD,
} from '../actions/SignInActions';

export function* handleSignIn(action: SignInAction) {
  try {
    const { payload } = action;
    yield call(signIn(payload));
    yield put(signInSuccessAction());
    const responseMe = yield call(getMe());
    yield put(setProfileAction(responseMe.data.user));
  } catch (err) {
    yield put(signInFailAction(err.response.data));
  }
}

export default function* signInWatcher() {
  yield takeLatest(SIGNIN_LOAD, handleSignIn);
}
