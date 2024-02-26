import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from './SignInForm';
import { signUpResetAction } from '../../../redux/actions/SignUpActions';
import {
  getSignInSelector,
  getSignUpSelector,
} from '../../../redux/selectors/authSelector';
import { Loader } from '../../../shared/Loader/Loader';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';
import '../Auth.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const { errorMessage, isLoading } = useSelector(getSignInSelector);
  const signUpSelector = useSelector(getSignUpSelector);

  useEffect(() => {
    return () => {
      dispatch(signUpResetAction());
    };
  });

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__inner">
          <div className="auth__inner-card">
            <div className="auth__inner-card--content">
              <h1 className="auth__inner-title">Sign in</h1>
              {errorMessage ? (
                <MessageNotification error={errorMessage?.error} />
              ) : signUpSelector.isFetching && !errorMessage ? (
                <MessageNotification
                  success={'An account was successfully registered'}
                />
              ) : (
                ''
              )}
              <SignInForm />
              {isLoading && <Loader />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
