import { ErrorDto } from '../../dto/ErrorDto';
import { UsersPayload } from '../../interfaces/UsersPayload';
import {
  GET_USERS_ERROR,
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  UsersAction,
} from '../actions/UsersActions';

export interface GetUsersState {
  users: UsersPayload | null;
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: GetUsersState = {
  users: null,
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const usersReducer = (
  state = initialState,
  action: UsersAction,
): GetUsersState | string => {
  switch (action.type) {
    case GET_USERS_LOAD:
      return { ...state, isLoading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        errorMessage: action.error,
        users: null,
      };
    default:
      return state;
  }
};
