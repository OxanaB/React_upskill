import { User } from '../interfaces/UserModel';

export interface AuthDto {
  success: boolean;
  message?: string;
  userId: string | any;
  user?: User | null;
}
