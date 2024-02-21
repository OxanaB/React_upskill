import { ErrorDto } from '../../dto/ErrorDto';
import { UsersPayload } from '../../interfaces/UsersPayload';

export const GET_USERS_LOAD = 'GET_USERS_LOAD';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export interface UsersAction {
  type: string;
  error: ErrorDto;
  payload: UsersPayload;
}

export const getUsersLoadAction = (payload: string) => {
  return {
    type: GET_USERS_LOAD,
    payload,
  };
};

export const getUsersSuccessAction = (payload: UsersAction) => {
  return {
    type: GET_USERS_SUCCESS,
    payload,
  };
};

export const getUsersErrorAction = (error: ErrorDto) => {
  return {
    type: GET_USERS_ERROR,
    error,
  };
};
