import { call, put, takeLatest } from 'redux-saga/effects';
import { editUserPhoto } from '../../services/usersService';
import { fetchCurrentUserAction } from '../actions/CurrentUserActions';
import {
  editPhotoErrorAction,
  editPhotoSuccessAction,
  EditPhotoUserAction,
  EDIT_USER_PHOTO_LOAD,
} from '../actions/EditPhotoUserActions';
import { fetchProfileAction } from '../actions/ProfileActions';

export function* handleEditPhoto(action: EditPhotoUserAction) {
  try {
    yield call(editUserPhoto(action.payload));
    yield put(editPhotoSuccessAction());
    yield put(fetchCurrentUserAction(action.userId));
    yield put(fetchProfileAction());
  } catch (err) {
    yield put(editPhotoErrorAction(action.error));
  }
}

export default function* editPhotoUserWatcher() {
  yield takeLatest(EDIT_USER_PHOTO_LOAD, handleEditPhoto);
}
