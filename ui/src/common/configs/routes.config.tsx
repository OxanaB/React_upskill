import { lazy } from 'react';

import Home from '../pages/Home/Home';
import { RenderRoutes } from '../containers/Layout/Routes';
import { RenderRoutesProps } from '../interfaces/Route';

const SignUp = lazy(() => import('../pages/Auth/SignUp/SignUp'));
const SignIn = lazy(() => import('../pages/Auth/SignIn/SignIn'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const UserProfile = lazy(
  () => import('../pages/Users/UserProfile/UserProfile'),
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const EditProfile = lazy(
  () => import('../pages/Users/EditProfile/EditProfile'),
);
const Users = lazy(() => import('../pages/Users/Users/Users'));
const Company = lazy(() => import('../pages/Companies/Company/Company'));
const AddCompany = lazy(() => import('../pages/Companies/Company/AddCompany'));
const CompaniesList = lazy(
  () => import('../pages/Companies/CompaniesList/CompaniesList'),
);
const Vacancy = lazy(() => import('../pages/Vacancies/Vacancy/Vacancy'));
const AddVacancy = lazy(
  () => import('../pages/Vacancies/Vacancy/AddVacancy/AddVacancy'),
);
const VacanciesList = lazy(
  () => import('../pages/Vacancies/VacanciesList/VacanciesList'),
);

export const routes: RenderRoutesProps = {
  path: '/',
  keyValue: 'APP',
  component: RenderRoutes,
  list: [
    {
      path: '/',
      exact: true,
      keyValue: 'APP_ROOT',
      isAuth: false,
      component: Home,
    },
    {
      path: '/dashboard',
      exact: true,
      keyValue: 'APP_ROOT',
      isAuth: true,
      component: Dashboard,
    },
    {
      path: '/sign-in',
      exact: true,
      keyValue: 'SIGN_IN',
      isAuth: false,
      component: SignIn,
    },
    {
      path: '/sign-up',
      exact: true,
      keyValue: 'SIGN_UP',
      isAuth: false,
      component: SignUp,
    },
    {
      path: '/not-found',
      keyValue: 'NOT_FOUND',
      isAuth: false,
      component: NotFound,
    },

    {
      path: '/users',
      exact: true,
      keyValue: 'USERS',
      isAuth: true,
      component: Users,
    },
    {
      path: '/companies',
      exact: true,
      keyValue: 'COMPANIES',
      isAuth: true,
      component: CompaniesList,
    },
    {
      path: '/companies/:companyUrl',
      exact: true,
      keyValue: 'COMPANY',
      isAuth: true,
      component: Company,
    },
    {
      path: '/companies/:companyUrl/add-vacancy',
      exact: true,
      keyValue: 'ADD_VACANCY',
      isAuth: true,
      isEmployer: true,
      component: AddVacancy,
    },
    {
      path: '/add-company',
      exact: true,
      keyValue: 'ADD_COMPANY',
      isAuth: true,
      isEmployer: true,
      component: AddCompany,
    },
    {
      path: '/vacancies',
      exact: true,
      keyValue: 'VACANCIES',
      isAuth: true,
      component: VacanciesList,
    },
    {
      path: '/vacancies/:vacancyId',
      exact: true,
      keyValue: 'VACANCY',
      isAuth: true,
      component: Vacancy,
    },
    {
      path: '/users/:userId',
      exact: true,
      keyValue: 'CURRENT_USER',
      isAuth: true,
      component: UserProfile,
    },
    {
      path: '/edit-profile',
      exact: true,
      keyValue: 'EDIT_PROFILE',
      isAuth: true,
      component: EditProfile,
    },
    {
      path: '*',
      keyValue: 'NOT_FOUND',
      isAuth: false,
      component: NotFound,
    },
  ],
};
