import { ErrorDto } from '../../dto/ErrorDto';
import { Vacancy } from '../../interfaces/VacancyModel';

export const SET_VACANCY = 'SET_VACANCY';
export const DELETE_VACANCY = 'DELETE_VACANCY';
export const FETCH_VACANCY = 'FETCH_VACANCY';
export const RESET_VACANCY = 'RESET_VACANCY';

export interface VacancyAction {
  type: string;
  payload: Vacancy | null;
  error: ErrorDto;
  id: string;
}

export const setVacancyAction = (payload: Vacancy | null) => {
  return {
    type: SET_VACANCY,
    payload,
  };
};

export const delVacancyAction = () => {
  return {
    type: DELETE_VACANCY,
  };
};

export const fetchVacancyAction = (id: string) => {
  return {
    type: FETCH_VACANCY,
    id,
  };
};

export const errorVacancyAction = (err: ErrorDto) => {
  return {
    type: FETCH_VACANCY,
    err,
  };
};

export const resetVacancyAction = () => {
  return {
    type: RESET_VACANCY,
  };
};
