import { call, put, takeLatest } from 'redux-saga/effects';
import { signUp } from '../../services/authService';
import { resetSignInAction } from '../actions/SignInActions';
import {
  SignUpAction,
  signUpFailAction,
  signUpSuccessAction,
  SIGNUP_LOAD,
} from '../actions/SignUpActions';

export function* handleSignUp(action: SignUpAction) {
  try {
    const { payload } = action;
    const response = yield call(signUp(payload));
    yield put(signUpSuccessAction(response));
    yield put(resetSignInAction());
  } catch (err) {
    yield put(signUpFailAction(err.response.data));
  }
}

export default function* signUpWatcher() {
  yield takeLatest(SIGNUP_LOAD, handleSignUp);
}
