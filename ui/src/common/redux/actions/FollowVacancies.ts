import { ErrorDto } from '../../dto/ErrorDto';
import { VacanciesStateProps } from '../../interfaces/StateProps';

export const GET_FOLLOW_VACANCIES_LOAD = 'GET_FOLLOW_VACANCIES_LOAD';
export const GET_FOLLOW_VACANCIES_SUCCESS = 'GET_FOLLOW_VACANCIES_SUCCESS';
export const GET_FOLLOW_VACANCIES_ERROR = 'GET_FOLLOW_VACANCIES_ERROR';

export interface VacanciesAction {
  type: string;
  error: ErrorDto;
  query: string;
  payload: VacanciesStateProps;
}
export const getFollowVacanciesLoadAction = (query: string) => {
  return {
    type: GET_FOLLOW_VACANCIES_LOAD,
    query,
  };
};

export const getFollowVacanciesSuccessAction = (
  payload: VacanciesStateProps,
) => {
  return {
    type: GET_FOLLOW_VACANCIES_SUCCESS,
    payload,
  };
};

export const getFollowVacanciesErrorAction = (error: ErrorDto) => {
  return {
    type: GET_FOLLOW_VACANCIES_ERROR,
    error,
  };
};
