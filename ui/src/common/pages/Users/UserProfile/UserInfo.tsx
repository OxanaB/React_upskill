import React from 'react';
import { User } from '../../../interfaces/UserModel';
import moment from 'moment';

interface UserInfoProps {
  user: User;
  me: User;
}

export const UserInfo = ({ user, me }: UserInfoProps) => (
  <div className="defaultpage__inner-center">
    <div className="defaultpage__inner-block userpage__inner-info">
      <div className="defaultpage__inner userpage__inner-info--short">
        <div className="userpage__inner-info--name">
          <h2>
            {user.firstName} {user.lastName} {me._id === user._id && '(You)'}
          </h2>
          <span className="userpage__inner-role">{user.role}</span>
        </div>
        <span className="userpage__inner-date">
          Registered at {moment(user.createdAt).format('MMM Do YYYY')}
        </span>
      </div>
      <div className="defaultpage__inner-line"></div>
      <div className="userpage__inner-info--main">
        <span className="userpage__inner-info--desc">Job information</span>
        {user.position && (
          <p className="userpage__inner-info--text">
            Position: <span>{user.position}</span>
          </p>
        )}
        {user.salary && (
          <p className="userpage__inner-info--text">
            Salary: <span className="salary">from {user.salary}$</span>
          </p>
        )}
        <p className="userpage__inner-info--text">
          Status: <span>{user.status}</span>
        </p>
      </div>
      {user.birthDate || user.city ? (
        <>
          <div className="defaultpage__inner-line"></div>
          <div className="userpage__inner-info--main">
            <span className="userpage__inner-info--desc">
              Personal information
            </span>
            {user.birthDate && (
              <p className="userpage__inner-info--text">
                Birthdate:
                <span>
                  {` ${moment(user.birthDate).format('D MMM')} (
                  ${moment().diff(user.birthDate, 'years')} years old)`}
                </span>
              </p>
            )}
            {user.city && (
              <p className="userpage__inner-info--text">
                City: <span>{user.city}</span>
              </p>
            )}
          </div>
        </>
      ) : (
        ''
      )}
      <div className="defaultpage__inner-line"></div>
      {user.about && (
        <div className="userpage__inner-info--about">
          <h3>About:</h3>
          <p>{user.about}</p>
        </div>
      )}
    </div>
  </div>
);
