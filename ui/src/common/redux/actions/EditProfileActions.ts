import { AuthDto } from '../../dto/AuthDto';
import { EditProfileFormProps } from '../../interfaces/EditProfileFormProps';
import { UserErrorDto } from '../../interfaces/UserModel';

export const EDIT_PROFILE_LOAD = 'EDIT_PROFILE_LOAD';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR';
export const EDIT_PROFILE_RESET = 'EDIT_PROFILE_RESET';

export interface EditProfileAction {
  type: string;
  payload: UserErrorDto | undefined;
}

export const editProfileLoadAction = (payload: EditProfileFormProps) => {
  return {
    type: EDIT_PROFILE_LOAD,
    payload,
  };
};

export const editProfileSuccessAction = () => {
  return {
    type: EDIT_PROFILE_SUCCESS,
  };
};

export const editProfileErrorAction = (payload: AuthDto) => {
  return {
    type: EDIT_PROFILE_ERROR,
    payload,
  };
};

export const editProfileResetAction = () => {
  return {
    type: EDIT_PROFILE_RESET,
  };
};
