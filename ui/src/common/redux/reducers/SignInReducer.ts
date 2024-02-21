import { ErrorDto } from '../../dto/ErrorDto';
import {
  SIGNIN_ERROR,
  SIGNIN_LOAD,
  SIGNIN_SUCCESS,
  SignInAction,
  RESET_SIGNIN,
} from '../actions/SignInActions';

export interface SignInState {
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: SignInState = {
  isLoading: false,
  isError: false,
  isFetching: false,
  errorMessage: null,
};

export const signInReducer = (
  state = initialState,
  action: SignInAction,
): SignInState => {
  switch (action.type) {
    case SIGNIN_LOAD:
      return { ...state, isLoading: true };
    case SIGNIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isFetching: true,
        errorMessage: null,
      };
    }
    case RESET_SIGNIN: {
      return initialState;
    }
    default:
      return state;
  }
};
