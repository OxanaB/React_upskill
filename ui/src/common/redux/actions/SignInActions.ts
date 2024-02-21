import { ErrorDto } from '../../dto/ErrorDto';
import { AuthFormComponent } from '../../interfaces/AuthFormComponent';

export const SIGNIN_LOAD = 'SIGNIN_LOAD';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';
export const RESET_SIGNIN = 'RESET_SIGNIN';

export interface SignInAction {
  type: string;
  error: ErrorDto | null;
  payload: AuthFormComponent | undefined;
}

export const signInLoadAction = (payload: AuthFormComponent) => {
  return {
    type: SIGNIN_LOAD,
    payload,
  };
};

export const signInSuccessAction = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};

export const signInFailAction = (error: ErrorDto) => {
  return {
    type: SIGNIN_ERROR,
    error,
  };
};

export const resetSignInAction = () => {
  return {
    type: RESET_SIGNIN,
  };
};
