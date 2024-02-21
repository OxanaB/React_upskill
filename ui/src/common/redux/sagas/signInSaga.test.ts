import { call, put, takeLatest } from 'redux-saga/effects';
import { getMe, signIn } from '../../services/authService';
import { setProfileAction } from '../actions/ProfileActions';
import {
  signInFailAction,
  signInSuccessAction,
  SIGNIN_LOAD,
} from '../actions/SignInActions';
import signInWatcher, { handleSignIn } from './signInSaga';

describe('signInSaga', () => {
  const genObject = signInWatcher();
  const user = {
    _id: '123456',
    email: 'test@test.com',
    firstName: 'test',
    lastName: 'test',
    role: 'test',
    createdAt: new Date('December 17, 2020 03:24:00'),
    updatedAt: new Date('December 17, 2020 03:24:00'),
  };
  const authData = {
    email: 'email@gmail.com',
    password: '123456',
  };

  it('should wait for every SIGNIN_LOAD action and call handleSignIn', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(SIGNIN_LOAD, handleSignIn),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

  it('should be call success handleSignIn', () => {
    const genObjectSuccess = handleSignIn({
      type: SIGNIN_LOAD,
      error: null,
      payload: authData,
    });
    expect(JSON.stringify(genObjectSuccess.next().value)).toEqual(
      JSON.stringify(call(signIn(authData))),
    );
    expect(genObjectSuccess.next().value).toEqual(put(signInSuccessAction()));
    expect(JSON.stringify(genObjectSuccess.next().value)).toEqual(
      JSON.stringify(call(getMe())),
    );
    expect(
      genObjectSuccess.next({
        data: {
          user,
        },
      }).value,
    ).toEqual(put(setProfileAction(user)));
  });
  it('should be call error handleSignIn', () => {
    const genObjectError = handleSignIn({
      type: SIGNIN_LOAD,
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
        signInFailAction({
          error: 'Test error',
        }),
      ),
    );
  });
});
