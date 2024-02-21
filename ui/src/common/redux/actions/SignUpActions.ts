import { AuthDto } from '../../dto/AuthDto';
import { ErrorDto } from '../../dto/ErrorDto';
import { AuthFormComponent } from '../../interfaces/AuthFormComponent';

export const SIGNUP_LOAD = 'SIGNUP_LOAD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_RESET = 'RESET_SIGNUP';

export interface SignUpAction {
  type: string;
  error: ErrorDto | null;
  payload: AuthFormComponent;
}

export const signUpLoadAction = (payload: AuthFormComponent) => {
  return {
    type: SIGNUP_LOAD,
    payload,
  };
};

export const signUpSuccessAction = (payload: AuthDto) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signUpFailAction = (error: ErrorDto) => {
  return {
    type: SIGNUP_ERROR,
    error,
  };
};

export const signUpResetAction = () => {
  return {
    type: SIGNUP_RESET,
  };
};
