import { call, put, takeLatest } from 'redux-saga/effects';
import { signUp } from '../../services/authService';
import { resetSignInAction } from '../actions/SignInActions';
import {
  signUpFailAction,
  signUpSuccessAction,
  SIGNUP_LOAD,
} from '../actions/SignUpActions';
import signUpWatcher, { handleSignUp } from './signUpSaga';

describe('signUpSaga', () => {
  const genObject = signUpWatcher();

  const authData = {
    email: 'test@gmail.com',
    password: '123456',
  };

  it('should wait for every SIGNUP_LOAD action and call handleSignUp', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(SIGNUP_LOAD, handleSignUp),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

  it('should be call success handleSignUp', () => {
    const genObjectSuccess = handleSignUp({
      type: SIGNUP_LOAD,
      error: null,
      payload: authData,
    });
    expect(JSON.stringify(genObjectSuccess.next().value)).toEqual(
      JSON.stringify(call(signUp(authData))),
    );
    expect(
      JSON.stringify(
        genObjectSuccess.next({
          success: true,
          userId: '123456',
        }).value,
      ),
    ).toEqual(
      JSON.stringify(
        put(
          signUpSuccessAction({
            success: true,
            userId: '123456',
          }),
        ),
      ),
    );

    expect(genObjectSuccess.next().value).toEqual(put(resetSignInAction()));
  });

  it('should be call error handleSignUp', () => {
    const genObjectError = handleSignUp({
      type: SIGNUP_LOAD,
      error: null,
      payload: authData,
    });

    genObjectError.next();
    expect(
      genObjectError.throw({
        response: {
          data: {
            error: 'Test error',
          },
        },
      }).value,
    ).toMatchObject(
      put(
        signUpFailAction({
          error: 'Test error',
        }),
      ),
    );
  });
});
