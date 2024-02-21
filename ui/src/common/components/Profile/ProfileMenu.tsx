import React from 'react';
import { User } from '../../interfaces/UserModel';
import Icon from '../../shared/Icon/Icon';
import { useDispatch } from 'react-redux';
import { delProfileAction } from '../../redux/actions/ProfileActions';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

interface ProfileProps {
  me: User;
}

export const ProfileMenu = ({ me }: ProfileProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignOut = () => {
    dispatch(delProfileAction());
    history.push('/');
  };
  return (
    <div className="profile__outer">
      <nav>
        <ul className="profile__outer-menu">
          <li className="profile__outer-item role-item">
            <h4>Role:</h4> {me.role}
          </li>
          <li className="profile__outer-item">
            <Link to={`/users/${me._id}`}>
              <Icon iconName="icon-user" />
              My profile
            </Link>
          </li>
          <li className="profile__outer-item">
            <Link to="/edit-profile">
              <Icon iconName="icon-settings" />
              Settings
            </Link>
          </li>
          <div className="profile__outer-line">
            <li className="profile__outer-item" onClick={handleSignOut}>
              <Link to="/">
                <Icon iconName="icon-logout" />
                Logout
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
