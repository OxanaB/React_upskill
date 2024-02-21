import { ErrorDto } from '../../dto/ErrorDto';
import { CompaniesProps } from '../../interfaces/StateProps';

export const GET_COMPANIES_LOAD = 'GET_COMPANIES_LOAD';
export const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS';
export const GET_COMPANIES_ERROR = 'GET_COMPANIES_ERROR';

export interface CompaniesAction {
  type: string;
  error: ErrorDto;
  query: string;
  payload: CompaniesProps;
}
export const getCompaniesLoadAction = (query: string) => {
  return {
    type: GET_COMPANIES_LOAD,
    query,
  };
};

export const getCompaniesSuccessAction = (payload: CompaniesProps) => {
  return {
    type: GET_COMPANIES_SUCCESS,
    payload,
  };
};

export const getCompaniesErrorAction = (error: ErrorDto) => {
  return {
    type: GET_COMPANIES_ERROR,
    error,
  };
};
