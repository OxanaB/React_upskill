import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addCompany,
  followOrUnfollowCompany,
  getCompanies,
  getCompany,
} from '../../services/companyService';
import {
  AddCompanyAction,
  errorAddCompanyAction,
  FETCH_ADD_COMPANY,
  successAddCompanyAction,
} from '../actions/AddCompanyActions';
import {
  CompaniesAction,
  getCompaniesErrorAction,
  getCompaniesSuccessAction,
  GET_COMPANIES_LOAD,
} from '../actions/CompaniesActions';
import {
  CompanyAction,
  fetchCompanyAction,
  FETCH_COMPANY,
  FETCH_FOLLOW,
  setCompanyAction,
  fetchedFollowCompanyAction,
} from '../actions/GetCompanyActions';

export function* handleCompany(action: CompanyAction) {
  try {
    const response = yield call(getCompany(action.companyUrl));
    yield put(setCompanyAction(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleSub(action: CompanyAction) {
  try {
    yield call(followOrUnfollowCompany(action.companyUrl));
    yield put(fetchCompanyAction(action.companyUrl));
    yield put(fetchedFollowCompanyAction());
  } catch (err) {
    console.log(err);
  }
}

export function* handleAddCompany(action: AddCompanyAction) {
  try {
    yield call(addCompany(action.payload));
    yield put(successAddCompanyAction());
  } catch (err) {
    yield put(errorAddCompanyAction(err.response.data));
  }
}

export function* handleCompanies(action: CompaniesAction) {
  try {
    const response = yield call(getCompanies(action.query));
    yield put(getCompaniesSuccessAction(response.data));
  } catch (err) {
    yield put(getCompaniesErrorAction(err.response.data));
  }
}

export default function* companyWatcher() {
  yield takeLatest(FETCH_COMPANY, handleCompany);
  yield takeLatest(FETCH_FOLLOW, handleSub);
  yield takeLatest(FETCH_ADD_COMPANY, handleAddCompany);
  yield takeLatest(GET_COMPANIES_LOAD, handleCompanies);
}
