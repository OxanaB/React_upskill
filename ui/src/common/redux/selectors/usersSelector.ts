import { StateProps } from '../../interfaces/StateProps';

export const getUsersSelector = (state: StateProps) => state.usersReducer.users;
export const getUsersInfoSelector = (state: StateProps) => state.usersReducer;
export const editPhotoUserSelector = (state: StateProps) =>
  state.editPhotoUserReducer;
