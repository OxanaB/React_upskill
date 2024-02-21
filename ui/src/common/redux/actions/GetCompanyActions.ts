import { Company } from '../../interfaces/CompanyModel';

export const SET_COMPANY = 'SET_COMPANY';
export const DELETE_COMPANY = 'RESET_COMPANY';
export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_FOLLOW = 'FETCH_FOLLOW';
export const FETCHED_FOLLOW = 'FETCHED_FOLLOW';

export interface CompanyAction {
  type: string;
  payload: Company | null;
  companyUrl: string | number;
}

export const setCompanyAction = (payload: Company | null) => {
  return {
    type: SET_COMPANY,
    payload,
  };
};

export const delCompanyAction = () => {
  return {
    type: DELETE_COMPANY,
  };
};

export const fetchCompanyAction = (companyUrl: string | number) => {
  return {
    type: FETCH_COMPANY,
    companyUrl,
  };
};

export const fetchFollowCompanyAction = (companyUrl: string | number) => {
  return {
    type: FETCH_FOLLOW,
    companyUrl,
  };
};

export const fetchedFollowCompanyAction = () => {
  return {
    type: FETCHED_FOLLOW,
  };
};
