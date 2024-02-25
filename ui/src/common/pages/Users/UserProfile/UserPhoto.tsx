import React, { FC } from 'react';
import { User } from '../../../interfaces/UserModel';
import ModalEditPhoto from '../../../shared/Modal/ModalEditPhoto/ModalEditPhoto';
import useModal from '../../../hooks/useModal';
import noavatar from '../../../assets/images/no-avatar.png';
import { Link } from 'react-router-dom';

export const UserPhoto: FC<{ user: User; me: User }> = ({ user, me }) => {
  const [Modal, open, close] = useModal();

  const handleOpenEditPhoto = () => open();
  return (
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
            <Link to="/edit-profile" className="btn btn-small primary">
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
  );
};
