import { AddCompanyDto } from '../../dto/AddCompanyDto';
import { ErrorDto } from '../../dto/ErrorDto';

export const FETCH_ADD_COMPANY = 'FETCH_ADD_COMPANY';
export const ERROR_ADD_COMPANY = 'ERROR_ADD_COMPANY';
export const SUCCESS_ADD_COMPANY = 'SUCCESS_ADD_COMPANY';

export interface AddCompanyAction {
  type: string;
  payload: AddCompanyDto;
  errorMessage: ErrorDto;
}

export const fetchAddCompanyAction = (payload: AddCompanyDto) => {
  return {
    type: FETCH_ADD_COMPANY,
    payload,
  };
};

export const successAddCompanyAction = () => {
  return {
    type: SUCCESS_ADD_COMPANY,
  };
};

export const errorAddCompanyAction = (errorMessage: ErrorDto) => {
  return {
    type: ERROR_ADD_COMPANY,
    errorMessage,
  };
};
