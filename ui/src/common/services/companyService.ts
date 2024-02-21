import { instance } from '../configs/axios.config';
import { AddCompanyDto } from '../dto/AddCompanyDto';
import { getFormData } from '../utils/getFormData';

const COMPANY_URI = '/companies';
const ADD_COMPANY_URI = `${COMPANY_URI}/add-company`;

export const getCompanies = (query: string) => () => {
  return instance.get(`${COMPANY_URI}/${query}`);
};

export const getCompany = (companyUrl: string | number) => () => {
  return instance.get(`${COMPANY_URI}/${companyUrl}`);
};

export const addCompany = (payload: AddCompanyDto) => () => {
  const bodyFormData = getFormData(payload);
  return instance.post(ADD_COMPANY_URI, bodyFormData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const followOrUnfollowCompany = (companyUrl: string | number) => () => {
  return instance.put(`${COMPANY_URI}/${companyUrl}`);
};
