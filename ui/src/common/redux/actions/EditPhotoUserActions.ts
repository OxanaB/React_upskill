import { ErrorDto } from '../../dto/ErrorDto';
import { User } from '../../interfaces/UserModel';

export const EDIT_USER_PHOTO_LOAD = 'EDIT_USER_PHOTO_LOAD';
export const EDIT_USER_PHOTO_SUCCESS = 'EDIT_USER_PHOTO_SUCCESS';
export const EDIT_USER_PHOTO_ERROR = 'EDIT_USER_PHOTO_SUCCESS';

export interface EditPhotoUserAction {
  type: string;
  error: ErrorDto;
  payload: FileList | null;
  userId: string;
}

export const editPhotoLoadAction = (
  payload: FileList | null,
  userId: User | string,
) => {
  return {
    type: EDIT_USER_PHOTO_LOAD,
    payload,
    userId,
  };
};

export const editPhotoSuccessAction = () => {
  return {
    type: EDIT_USER_PHOTO_SUCCESS,
  };
};

export const editPhotoErrorAction = (error: ErrorDto) => {
  return {
    type: EDIT_USER_PHOTO_ERROR,
    error,
  };
};
