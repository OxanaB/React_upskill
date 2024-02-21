import { StateProps } from '../../interfaces/StateProps';

export const getCurrentUserSelector = (state: StateProps) =>
  state.currentUserReducer.currentUser?.user;
export const getCurrentUserStateSelector = (state: StateProps) => {
  const { isFetching, isLoading } = state.currentUserReducer;
  return { isFetching, isLoading };
};
export const getCurrentUserFollowingSelector = (state: StateProps) =>
  state.currentUserReducer.currentUser?.following;
