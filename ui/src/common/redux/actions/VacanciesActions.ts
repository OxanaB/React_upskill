import { ErrorDto } from '../../dto/ErrorDto';
import { VacanciesStateProps } from '../../interfaces/StateProps';

export const GET_VACANCIES_LOAD = 'GET_VACANCIES_LOAD';
export const GET_VACANCIES_SUCCESS = 'GET_VACANCIES_SUCCESS';
export const GET_VACANCIES_ERROR = 'GET_VACANCIES_ERROR';

export interface VacanciesAction {
  type: string;
  error: ErrorDto;
  query: string;
  payload: VacanciesStateProps;
}
export const getVacanciesLoadAction = (query: string) => {
  return {
    type: GET_VACANCIES_LOAD,
    query,
  };
};

export const getVacanciesSuccessAction = (payload: VacanciesStateProps) => {
  return {
    type: GET_VACANCIES_SUCCESS,
    payload,
  };
};

export const getVacanciesErrorAction = (error: ErrorDto) => {
  return {
    type: GET_VACANCIES_ERROR,
    error,
  };
};
