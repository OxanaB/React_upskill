import { ErrorDto } from '../../dto/ErrorDto';
import {
  EditPhotoUserAction,
  EDIT_USER_PHOTO_ERROR,
  EDIT_USER_PHOTO_LOAD,
  EDIT_USER_PHOTO_SUCCESS,
} from '../actions/EditPhotoUserActions';

export interface EditPhotoUserState {
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: EditPhotoUserState = {
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const editPhotoUserReducer = (
  state = initialState,
  action: EditPhotoUserAction,
): EditPhotoUserState => {
  switch (action.type) {
    case EDIT_USER_PHOTO_LOAD:
      return { ...state, isLoading: true };
    case EDIT_USER_PHOTO_SUCCESS:
      return { ...state, isLoading: false, isFetching: true };
    case EDIT_USER_PHOTO_ERROR:
      return { ...state, isLoading: false, errorMessage: action.error };
    default:
      return state;
  }
};
