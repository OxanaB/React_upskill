import { instance } from '../configs/axios.config';
import { UserErrorDto } from '../interfaces/UserModel';
import { UsersPayload } from '../interfaces/UsersPayload';
import { UsersAction } from '../redux/actions/UsersActions';

const USERS_URI = '/users';

export const getUsers = (payload: UsersPayload | UsersAction) => () => {
  return instance.get(`${USERS_URI}${payload}`);
};

export const getCurrentUser = (payload: string) => () => {
  return instance.get(`${USERS_URI}/${payload}`);
};

export const editProfile = (payload: UserErrorDto | undefined) => () => {
  return instance.put(`${USERS_URI}/update-user`, payload);
};

export const editUserPhoto = (payload: any) => () => {
  const bodyFormData = new FormData();
  bodyFormData.append('file', payload);
  return instance.put(`${USERS_URI}/edit-photo`, bodyFormData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
