import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserInfo } from './UserInfo';
import { UserTags } from '../UserTags';
import {
  delCurrentUserAction,
  fetchCurrentUserAction,
} from '../../../redux/actions/CurrentUserActions';
import {
  getCurrentUserSelector,
  getCurrentUserStateSelector,
  getCurrentUserFollowingSelector,
} from '../../../redux/selectors/currentUserSelector';
import { getProfileSelector } from '../../../redux/selectors/profileSelector';
import { Loader } from '../../../shared/Loader/Loader';
import { editPhotoUserSelector } from '../../../redux/selectors/usersSelector';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';
import { UserFollowing } from './UserFollowing';

import './Profile.scss';
import '../UserProfile.scss';
import { UserPhoto } from './UserPhoto';

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const { me } = useSelector(getProfileSelector);
  const { isLoading } = useSelector(getCurrentUserStateSelector);
  const editPhoto = useSelector(editPhotoUserSelector);
  const following = useSelector(getCurrentUserFollowingSelector);
  const user = useSelector(getCurrentUserSelector);
  const dispatch = useDispatch();

  useEffect((): any => {
    dispatch(fetchCurrentUserAction(userId));
    return () => dispatch(delCurrentUserAction());
  }, [dispatch, userId]);

  return (
    <>
      {me && user && (
        <div className="defaultpage">
          <div className="container">
            {editPhoto.errorMessage && (
              <MessageNotification error={editPhoto.errorMessage?.error} />
            )}
            <div className="defaultpage__inner">
              <div className="defaultpage__inner-left">
                <UserPhoto me={me} user={user} />

                {user && user.tags && user.tags.length ? (
                  <UserTags tags={user.tags} />
                ) : (
                  ''
                )}
                {following?.length ? (
                  <div className="defaultpage__inner-block defaultpage__leftblock">
                    <div className="userpage__leftblock-responses">
                      <p className="userpage__leftblock-responses--title">
                        Following
                      </p>
                      <UserFollowing following={following} />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <UserInfo me={me} user={user} />
            </div>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
      {editPhoto.isLoading && <Loader />}
    </>
  );
};

export default UserProfile;
