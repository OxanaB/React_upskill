export interface User {
  _id: string | number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  birthDate?: Date | string;
  status?: string;
  avatar?: string;
  city?: string;
  about?: string;
  tags?: string[] | string;
  position?: string;
  salary?: number | string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserErrorDto extends User {
  success?: boolean;
  error?: string;
}
