import { call, put, takeLatest } from 'redux-saga/effects';
import { getCurrentUser } from '../../services/usersService';
import {
  CurrentUserAction,
  FETCH_CURRENT_USER,
  setCurrentUserAction,
} from '../actions/CurrentUserActions';

export function* handleCurrentUser(action: CurrentUserAction) {
  try {
    const response = yield call(getCurrentUser(action.userId));
    yield put(setCurrentUserAction(response.data.user));
  } catch (err) {
    console.log(err);
  }
}

export default function* currentUserWatcher() {
  yield takeLatest(FETCH_CURRENT_USER, handleCurrentUser);
}
