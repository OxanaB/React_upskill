import React from 'react';
import { useSelector } from 'react-redux';
import SignUpForm from '../../../components/AuthForms/SignUpForm';
import { getSignUpSelector } from '../../../redux/selectors/authSelector';
import { Loader } from '../../../shared/Loader/Loader';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';

import '../Auth.scss';

const SignUp = () => {
  const { errorMessage, isLoading } = useSelector(getSignUpSelector);
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <div className="auth__inner-card">
            <div className="auth__inner-card--content">
              <h1 className="auth__inner-title">Sign up</h1>
              {errorMessage && (
                <MessageNotification error={errorMessage?.error} />
              )}
              {isLoading && <Loader />}
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
