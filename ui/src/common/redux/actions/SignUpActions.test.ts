import {
  signUpFailAction,
  signUpLoadAction,
  signUpSuccessAction,
  SIGNUP_ERROR,
  SIGNUP_LOAD,
  SIGNUP_SUCCESS,
} from './SignUpActions';

describe('SignUp Actions', () => {
  it('should be transmited sign up data', () => {
    const fetch = signUpLoadAction({
      email: 'test@gmail.com',
      firstName: 'Test',
      lastName: 'Test',
      password: 'Test',
      confirmPassword: 'test',
    });
    expect(fetch).toEqual({
      type: SIGNUP_LOAD,
      payload: {
        email: 'test@gmail.com',
        firstName: 'Test',
        lastName: 'Test',
        password: 'Test',
        confirmPassword: 'test',
      },
    });
  });

  it('success sign up action', () => {
    const fetch = signUpSuccessAction({
      success: true,
      userId: 'test',
    });
    expect(fetch).toEqual({
      type: SIGNUP_SUCCESS,
      payload: {
        success: true,
        userId: 'test',
      },
    });
  });

  it('fail sign in action', () => {
    const fetch = signUpFailAction({
      error: 'Test error',
    });
    expect(fetch).toEqual({
      type: SIGNUP_ERROR,
      error: {
        error: 'Test error',
      },
    });
  });
});
