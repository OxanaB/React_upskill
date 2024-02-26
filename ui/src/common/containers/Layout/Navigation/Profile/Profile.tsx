import React, { useState, useRef, useEffect } from 'react';
import noavatar from '../../../assets/images/no-avatar.png';
import Icon from '../../../../shared/Icon/Icon';
import classNames from 'classnames';
import { ProfileMenu } from './ProfileMenu';
import { useSelector } from 'react-redux';
import { getProfileSelector } from '../../../../redux/selectors/profileSelector';

import './Profile.scss';

const Profile = () => {
  const { me } = useSelector(getProfileSelector);
  const profileRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClickOutside = (e: any) => {
    if (profileRef.current?.contains(e.target)) {
      return;
    }
    setIsVisible(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      {me && (
        <div ref={profileRef} className="profile" onClick={handleClick}>
          <div className="profile__inner">
            <h3 className="profile__inner-name">
              {me.firstName.length > 12
                ? `${me.firstName.substring(0, 12)}...`
                : me.firstName}
            </h3>
            <img
              className="profile__inner-avatar"
              src={me.avatar || noavatar}
              alt=""
            />
            <Icon iconName={classNames('icon-arrow', isVisible && 'rotate')} />
          </div>
          {isVisible && <ProfileMenu me={me} />}
        </div>
      )}
    </>
  );
};

export default Profile;
