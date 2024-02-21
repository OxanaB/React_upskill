import { AddVacancyDto } from '../../dto/AddVacancyDto';
import { ErrorDto } from '../../dto/ErrorDto';

export const FETCH_ADD_VACANCY = 'FETCH_ADD_VACANCY';
export const FETCH_DELETE_VACANCY = 'FETCH_DELETE_VACANCY';
export const ERROR_OPERATE_VACANCY = 'ERROR_OPERATE_VACANCY';
export const SUCCESS_OPERATE_VACANCY = 'SUCCESS_OPERATE_VACANCY';

export interface AddVacancyAction {
  type: string;
  payload: AddVacancyDto;
  errorMessage: ErrorDto;
}

export const fetchAddVacancyAction = (payload: AddVacancyDto) => {
  return {
    type: FETCH_ADD_VACANCY,
    payload,
  };
};

export const fetchDeleteVacancyAction = (id: string) => {
  return {
    type: FETCH_DELETE_VACANCY,
    id,
  };
};

export const successOperateVacancyAction = () => {
  return {
    type: SUCCESS_OPERATE_VACANCY,
  };
};

export const errorOperateVacancyAction = (errorMessage: ErrorDto) => {
  return {
    type: ERROR_OPERATE_VACANCY,
    errorMessage,
  };
};
