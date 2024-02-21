import { Vacancy } from './VacancyModel';

export interface Company {
  _id: string | number;
  name: string;
  companyUrl: string;
  address: string;
  website: string;
  description?: string;
  year?: string;
  staff?: string;
  about: string;
  avatar?: string;
  author: string | number;
  background: string;
  followers: string[];
  isFollow: boolean;
  vacancies: Array<Vacancy>;
  createdAt?: Date;
  updatedAt?: Date;
}
