import { User } from '../../interfaces/UserModel';

export const SET_PROFILE = 'SET_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export const FETCH_PROFILE = 'FETCH_PROFILE';

export interface ProfileAction {
  type: string;
  payload: User | null;
}

export const setProfileAction = (payload: User) => {
  return {
    type: SET_PROFILE,
    payload,
  };
};

export const delProfileAction = () => {
  return {
    type: DELETE_PROFILE,
  };
};

export const fetchProfileAction = () => {
  return {
    type: FETCH_PROFILE,
  };
};
