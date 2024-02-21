import { instance } from '../configs/axios.config';
import { AddVacancyDto } from '../dto/AddVacancyDto';

const VACANCY_URI = '/vacancies';

export const getVacancies = (query: string) => () => {
  return instance.get(`${VACANCY_URI}/${query}`);
};

export const getFollowVacancies = (query: string) => () => {
  return instance.get(`${VACANCY_URI}/dashboard/${query}`);
};

export const getVacancy = (id: string) => () => {
  return instance.get(`${VACANCY_URI}/${id}`);
};

export const deleteVacancy = (id: string) => () => {
  return instance.delete(`${VACANCY_URI}/${id}`);
};

export const addVacancy = (payload: AddVacancyDto) => () => {
  return instance.post(
    `/companies/${payload.companyUrl}${VACANCY_URI}`,
    payload,
  );
};
