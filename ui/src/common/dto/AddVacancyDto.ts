export interface AddVacancyDto {
  title: string;
  description: string;
  worktype: string;
  salary?: number | string;
  position?: string;
  email: string;
  companyUrl: string;
}
