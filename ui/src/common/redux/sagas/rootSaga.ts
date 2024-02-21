import { all } from 'redux-saga/effects';
import profileWatcher from './profileSaga';
import signInWatcher from './signInSaga';
import signUpWatcher from './signUpSaga';
import editUserWatcher from './editUserSaga';
import currentUserWatcher from './currentUserSaga';
import usersWatcher from './getUsersSaga';
import editPhotoUserWatcher from './editPhotoUserSaga';
import companyWatcher from './companySaga';
import vacancyWatcher from './vacancySaga';

export default function* rootSaga() {
  yield all([
    signUpWatcher(),
    signInWatcher(),
    profileWatcher(),
    currentUserWatcher(),
    editUserWatcher(),
    usersWatcher(),
    editPhotoUserWatcher(),
    companyWatcher(),
    vacancyWatcher(),
  ]);
}
