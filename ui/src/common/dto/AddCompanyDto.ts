export interface AddCompanyDto {
  name: string;
  description: string;
  background?: string;
  companyUrl: string;
  avatar?: FileList | null;
  website: string;
  address: string;
  year?: string;
  staff?: string;
  about?: string;
}
