import { instance } from '../configs/axios.config';
import { AuthFormComponent } from '../interfaces/AuthFormComponent';

const SIGNUP_URI = '/auth/sign-up';
const SIGNIN_URI = '/auth/sign-in';
const SIGNOUT_URI = '/auth/sign-out';
const PROFILE_URI = '/auth/me';

export const signUp = (payload: AuthFormComponent) => () => {
  return instance.post(SIGNUP_URI, payload);
};

export const signIn = (payload: AuthFormComponent | undefined) => () => {
  return instance.post(SIGNIN_URI, payload);
};

export const getMe = () => () => {
  return instance.get(PROFILE_URI);
};

export const signOut = () => () => {
  return instance.post(SIGNOUT_URI);
};
