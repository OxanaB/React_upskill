import { combineReducers } from 'redux';
import { signUpReducer } from './SignUpReducer';
import { signInReducer } from './SignInReducer';
import { profileReducer } from './ProfileReducer';
import { currentUserReducer } from './CurrentUserReducer';
import { editUserReducer } from './EditUserReducer';
import { usersReducer } from './UsersReducer';
import { editPhotoUserReducer } from './EditPhotoUserReducer';
import { companyReducer } from './CompanyReducer';
import { addCompanyReducer } from './AddCompanyReducer';
import { companiesReducer } from './CompaniesReducer';
import { vacancyReducer } from './VacancyReducer';
import { operateVacancyReducer } from './OperateVacancyReducer';
import { vacanciesReducer } from './VacanciesReducer';
import { followVacanciesReducer } from './FollowVacanciesReducer';

export const rootReducer = combineReducers({
  signUpReducer,
  signInReducer,
  profileReducer,
  currentUserReducer,
  editUserReducer,
  usersReducer,
  editPhotoUserReducer,
  companyReducer,
  addCompanyReducer,
  companiesReducer,
  vacancyReducer,
  operateVacancyReducer,
  vacanciesReducer,
  followVacanciesReducer,
});
