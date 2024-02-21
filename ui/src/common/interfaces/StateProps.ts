import { ErrorDto } from '../dto/ErrorDto';
import { Company } from './CompanyModel';
import { PaginationProps } from './PaginationProps';
import { User } from './UserModel';
import { Vacancy } from './VacancyModel';

export interface StateProps {
  signUpReducer: DefaultStateProps;
  signInReducer: DefaultStateProps;
  profileReducer: {
    me: User | null;
  };
  currentUserReducer: UsersStateProps;
  editUserReducer: DefaultStateProps;
  editPhotoUserReducer: DefaultStateProps;
  usersReducer: UsersStateProps;
  addCompanyReducer: DefaultStateProps;
  companiesReducer: CompaniesStateProps;
  companyReducer: CompanyProps;
  operateVacancyReducer: DefaultStateProps;
  vacancyReducer: VacancyStateProps;
  vacanciesReducer: VacanciesSelectProps;
  followVacanciesReducer: VacanciesSelectProps;
}

export interface DefaultStateProps {
  isLoading: boolean;
  isError?: boolean;
  isFetching: boolean;
  isFollowLoad?: boolean;
  errorMessage: ErrorDto | null;
}

interface UsersStateProps extends DefaultStateProps {
  currentUser?: {
    user: User | null;
    following: Array<Company> | null;
  };
  following?: Company | null;
  users?: UsersProps;
}

interface UsersProps extends PaginationProps {
  data: Array<User>;
}

export interface VacanciesSelectProps extends DefaultStateProps {
  vacancies: VacanciesStateProps;
}

export interface VacanciesStateProps extends PaginationProps {
  data: Array<Vacancy>;
}

interface CompanyProps extends DefaultStateProps {
  company: Company;
}

interface CompaniesStateProps extends DefaultStateProps {
  companies: CompaniesProps;
}

interface VacancyProps extends DefaultStateProps {
  data: Vacancy;
}

interface VacancyStateProps extends VacancyProps {
  vacancy: VacancyProps;
}

export interface CompaniesProps extends PaginationProps {
  data: Array<Company>;
}
