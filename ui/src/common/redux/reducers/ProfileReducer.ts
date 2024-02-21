import { User } from '../../interfaces/UserModel';
import {
  FETCH_PROFILE,
  ProfileAction,
  SET_PROFILE,
  DELETE_PROFILE,
} from '../actions/ProfileActions';

export interface ProfileState {
  me: User | null;
}

const initialState: ProfileState = {
  me: null,
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction,
): ProfileState => {
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state };
    case SET_PROFILE:
      return { ...state, me: action.payload || null };
    case DELETE_PROFILE:
      return { ...state, me: null };
    default:
      return state;
  }
};
