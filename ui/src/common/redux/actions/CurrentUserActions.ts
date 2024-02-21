import { User } from '../../interfaces/UserModel';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_CURRENT_USER_ERROR = 'FETCH_CURRENT_USER_ERROR';

export interface CurrentUserAction {
  type: string;
  userId: string;
  payload: User | null;
}

export const setCurrentUserAction = (payload: User) => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};

export const delCurrentUserAction = () => {
  return {
    type: DELETE_CURRENT_USER,
  };
};

export const fetchCurrentUserAction = (userId: string) => {
  return {
    type: FETCH_CURRENT_USER,
    userId,
  };
};

export const fetchErrorCurrentUserAction = () => {
  return {
    type: FETCH_CURRENT_USER_ERROR,
  };
};
