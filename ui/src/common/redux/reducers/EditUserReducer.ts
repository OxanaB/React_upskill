import { ErrorDto } from '../../dto/ErrorDto';
import {
  EditProfileAction,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_LOAD,
  EDIT_PROFILE_RESET,
  EDIT_PROFILE_SUCCESS,
} from '../actions/EditProfileActions';

export interface EditUserState {
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | undefined;
}

const initialState: EditUserState = {
  isLoading: false,
  isFetching: false,
  errorMessage: undefined,
};

export const editUserReducer = (
  state = initialState,
  action: EditProfileAction,
): EditUserState => {
  switch (action.type) {
    case EDIT_PROFILE_LOAD:
      return { ...state, isLoading: true };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: undefined,
      };
    case EDIT_PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        errorMessage: action.payload,
      };
    case EDIT_PROFILE_RESET:
      return initialState;
    default:
      return state;
  }
};
