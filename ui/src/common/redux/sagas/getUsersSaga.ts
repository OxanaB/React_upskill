import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsers } from '../../services/usersService';
import {
  getUsersErrorAction,
  getUsersSuccessAction,
  GET_USERS_LOAD,
  UsersAction,
} from '../actions/UsersActions';

export function* handleGetUsers(action: UsersAction) {
  try {
    const response = yield call(getUsers(action.payload));
    yield put(getUsersSuccessAction(response.data));
  } catch (err) {
    yield put(getUsersErrorAction(err.response.data));
  }
}

export default function* usersWatcher() {
  yield takeLatest(GET_USERS_LOAD, handleGetUsers);
}
