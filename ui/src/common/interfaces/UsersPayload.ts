import { UserErrorDto } from './UserModel';

export interface UsersPayload {
  page?: string;
  users?: Array<UserErrorDto>;
  errorMessage?: UserErrorDto;
}
