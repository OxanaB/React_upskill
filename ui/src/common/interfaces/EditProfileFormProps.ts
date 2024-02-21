export interface EditProfileFormProps {
  birthDate?: Date | string;
  status?: string;
  city?: string;
  about?: string;
  tags?: string[] | string;
  position?: string;
  salary?: number | string;
}
