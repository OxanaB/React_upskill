import { Company } from './CompanyModel';

export interface Vacancy {
  _id: string;
  title: string;
  description: string;
  worktype: string;
  salary?: string;
  position?: string;
  email: string;
  author: string;
  companyUrl: string;
  company?: Company;
  createdAt: Date;
  updatedAt: Date;
}
