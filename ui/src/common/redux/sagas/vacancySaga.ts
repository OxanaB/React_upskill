import { call, put, takeLatest } from 'redux-saga/effects';
import {
  VacancyAction,
  setVacancyAction,
  errorVacancyAction,
  FETCH_VACANCY,
} from '../actions/VacancyActions';
import {
  getVacancy,
  addVacancy,
  deleteVacancy,
  getVacancies,
  getFollowVacancies,
} from '../../services/vacancyService';
import {
  FETCH_ADD_VACANCY,
  AddVacancyAction,
  errorOperateVacancyAction,
  successOperateVacancyAction,
  FETCH_DELETE_VACANCY,
} from '../actions/OperateVacancyActions';
import {
  getVacanciesErrorAction,
  getVacanciesSuccessAction,
  GET_VACANCIES_LOAD,
  VacanciesAction,
} from '../actions/VacanciesActions';
import {
  getFollowVacanciesSuccessAction,
  GET_FOLLOW_VACANCIES_LOAD,
} from '../actions/FollowVacancies';

export function* handleVacancy(action: VacancyAction) {
  try {
    const response = yield call(getVacancy(action.id));
    yield put(setVacancyAction(response.data));
  } catch (err) {
    yield put(errorVacancyAction(err.response.data));
  }
}

export function* handleVacancies(action: VacanciesAction) {
  try {
    const response = yield call(getVacancies(action.query));
    yield put(getVacanciesSuccessAction(response.data));
  } catch (err) {
    yield put(getVacanciesErrorAction(err.response.data));
  }
}

export function* handleFollowVacancies(action: VacanciesAction) {
  try {
    const response = yield call(getFollowVacancies(action.query));
    yield put(getFollowVacanciesSuccessAction(response.data));
  } catch (err) {
    yield put(getVacanciesErrorAction(err.response.data));
  }
}

export function* handleAddVacancy(action: AddVacancyAction) {
  try {
    yield call(addVacancy(action.payload));
    yield put(successOperateVacancyAction());
  } catch (err) {
    yield put(errorOperateVacancyAction(err.response.data));
  }
}

export function* handleDeleteVacancy(action: VacancyAction) {
  try {
    yield call(deleteVacancy(action.id));
    yield put(successOperateVacancyAction());
  } catch (err) {
    yield put(errorOperateVacancyAction(err.response.data));
  }
}

export default function* vacancyWatcher() {
  yield takeLatest(FETCH_VACANCY, handleVacancy);
  yield takeLatest(FETCH_DELETE_VACANCY, handleDeleteVacancy);
  yield takeLatest(FETCH_ADD_VACANCY, handleAddVacancy);
  yield takeLatest(GET_VACANCIES_LOAD, handleVacancies);
  yield takeLatest(GET_FOLLOW_VACANCIES_LOAD, handleFollowVacancies);
}
