import React, { useEffect } from 'react';
import EditProfileForm from '../../../components/EditProfileForm/EditProfileForm';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEditProfileSelector,
  getProfileSelector,
} from '../../../redux/selectors/profileSelector';
import { Loader } from '../../../shared/Loader/Loader';
import { editProfileResetAction } from '../../../redux/actions/EditProfileActions';

import '../UserProfile.scss';
import './EditProfile.scss';

const EditProfile = () => {
  const { me } = useSelector(getProfileSelector);
  const dispatch = useDispatch();
  const { isLoading, isFetching, errorMessage } = useSelector(
    getEditProfileSelector,
  );

  useEffect(() => {
    dispatch(editProfileResetAction());
  }, [dispatch]);

  if (!me || isLoading) {
    return <Loader />;
  }
  return (
    <div className="defaultpage">
      <div className="container">
        <div className="defaultpage__inner">
          <div className="defaultpage__inner-center editprofile">
            {isFetching ? (
              <MessageNotification success="User information has been successfully modified" />
            ) : errorMessage ? (
              <MessageNotification error={errorMessage?.error} />
            ) : (
              ''
            )}
            <div className="defaultpage__inner-block">
              <h2 className="editprofile__title">Edit information</h2>
              <EditProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
