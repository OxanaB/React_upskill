import {
  resetSignInAction,
  RESET_SIGNIN,
  signInFailAction,
  signInLoadAction,
  signInSuccessAction,
  SIGNIN_ERROR,
  SIGNIN_LOAD,
  SIGNIN_SUCCESS,
} from './SignInActions';

describe('SignIn Actions', () => {
  it('should be transmited sign in data', () => {
    const fetch = signInLoadAction({
      email: 'test@test.com',
      password: '123456',
    });
    expect(fetch).toEqual({
      type: SIGNIN_LOAD,
      payload: {
        email: 'test@test.com',
        password: '123456',
      },
    });
  });

  it('success sign in action', () => {
    const fetch = signInSuccessAction();
    expect(fetch).toEqual({ type: SIGNIN_SUCCESS });
  });

  it('fail sign in action', () => {
    const fetch = signInFailAction({
      error: 'Test error',
    });
    expect(fetch).toEqual({
      type: SIGNIN_ERROR,
      error: {
        error: 'Test error',
      },
    });
  });

  it('reset sign in action', () => {
    const fetch = resetSignInAction();
    expect(fetch).toEqual({ type: RESET_SIGNIN });
  });
});
