import { ErrorDto } from '../../dto/ErrorDto';
import {
  SignUpAction,
  SIGNUP_ERROR,
  SIGNUP_LOAD,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from '../actions/SignUpActions';

export interface SignUpState {
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | undefined;
}

const initialState: SignUpState = {
  isLoading: false,
  isError: false,
  isFetching: false,
  errorMessage: undefined,
};

export const signUpReducer = (
  state = initialState,
  action: SignUpAction,
): SignUpState => {
  switch (action.type) {
    case SIGNUP_LOAD:
      return { ...state, isLoading: true };
    case SIGNUP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error || undefined,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isFetching: true,
        errorMessage: undefined,
      };
    }
    case SIGNUP_RESET: {
      return initialState;
    }
    default:
      return state;
  }
};
