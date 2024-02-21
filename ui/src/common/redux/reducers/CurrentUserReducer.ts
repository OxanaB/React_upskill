import { User } from '../../interfaces/UserModel';
import { AuthFormComponent } from '../../interfaces/AuthFormComponent';
import {
  CurrentUserAction,
  DELETE_CURRENT_USER,
  FETCH_CURRENT_USER,
  SET_CURRENT_USER,
} from '../actions/CurrentUserActions';

export interface CurrentUserState {
  currentUser: User | string | null;
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: AuthFormComponent | undefined;
}

const initialState: CurrentUserState = {
  currentUser: null,
  isLoading: false,
  isFetching: false,
  errorMessage: undefined,
};

export const currentUserReducer = (
  state = initialState,
  action: CurrentUserAction,
): CurrentUserState => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, isLoading: true };
    case SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: undefined,
        currentUser: action.payload,
      };
    case DELETE_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};
