import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import noavatar from '../../../../assets/images/no-avatar.png';
import { CurrentUserInfo } from '../../../components/CurrentUser/CurrentUserInfo';
import { CurrentUserTags } from '../../../components/CurrentUser/CurrentUserTags';
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
import useModal from '../../../hooks/useModal';
import ModalEditPhoto from '../../../shared/Modal/ModalEditPhoto/ModalEditPhoto';
import { editPhotoUserSelector } from '../../../redux/selectors/usersSelector';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';
import { CurrentUserFollowing } from '../../../components/CurrentUser/CurrentUserFollowing';

import './Profile.scss';
import '../UserProfile.scss';

const UserProfile = () => {
  const [Modal, open, close] = useModal();
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

  const handleOpenEditPhoto = () => open();

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
                <div className="defaultpage__inner-block defaultpage__leftblock">
                  <div className="userpage__inner-profile">
                    <div className="userpage__inner-profile--img">
                      <img
                        className="userpage__inner-avatar"
                        src={user.avatar || noavatar}
                        alt="avatar"
                      />
                      {me._id === user._id && (
                        <div
                          className="userpage__inner-profile--edit"
                          onClick={handleOpenEditPhoto}
                        >
                          <span>Set a photo</span>
                        </div>
                      )}
                    </div>
                    <div className="userpage__leftblock-buttons">
                      {me._id === user._id && (
                        <Link
                          to="/edit-profile"
                          className="btn btn-small primary"
                        >
                          Edit profile
                        </Link>
                      )}
                    </div>
                  </div>
                  {me && me._id && (
                    <Modal>
                      <ModalEditPhoto
                        close={close}
                        model={{ id: me._id, avatar: me.avatar || noavatar }}
                      />
                    </Modal>
                  )}
                </div>

                {user && user.tags && user.tags.length ? (
                  <CurrentUserTags tags={user.tags} />
                ) : (
                  ''
                )}
                {following?.length ? (
                  <div className="defaultpage__inner-block defaultpage__leftblock">
                    <div className="userpage__leftblock-responses">
                      <p className="userpage__leftblock-responses--title">
                        Following
                      </p>
                      <CurrentUserFollowing following={following} />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <CurrentUserInfo me={me} user={user} />
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
