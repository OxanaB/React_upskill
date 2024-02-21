import {
  SIGNUP_ERROR,
  SIGNUP_LOAD,
  SIGNUP_SUCCESS,
} from '../actions/SignUpActions';
import { signUpReducer, SignUpState } from './SignUpReducer';

const initialState: SignUpState = {
  isLoading: false,
  isError: false,
  isFetching: false,
  errorMessage: undefined,
};

describe('Sign up reducer', () => {
  it('should return initial state', () => {
    const reducer = signUpReducer(undefined, {
      type: 'Test',
      payload: {
        email: 'test@gmail.com',
        password: '123456',
      },
      error: {
        error: 'test',
      },
    });
    expect(reducer).toEqual(initialState);
  });

  it('should return load sign up', () => {
    const reducer = signUpReducer(initialState, {
      type: SIGNUP_LOAD,
      payload: {
        email: 'test@gmail.com',
        password: '123456',
      },
      error: {
        success: true,
      },
    });
    expect(reducer).toEqual({ ...initialState, isLoading: true });
  });

  it('should return success sign up', () => {
    const reducer = signUpReducer(initialState, {
      type: SIGNUP_SUCCESS,
      payload: {
        email: 'test@gmail.com',
        password: '123456',
        success: true,
      },
      error: {
        success: true,
      },
    });
    expect(reducer).toEqual({
      ...initialState,
      isLoading: false,
      isFetching: true,
    });
  });

  it('should return error sign up', () => {
    const reducer = signUpReducer(initialState, {
      type: SIGNUP_ERROR,
      payload: {
        email: 'test@gmail.com',
        password: '123456',
        error: undefined,
      },
      error: {
        error: 'test',
      },
    });
    expect(reducer).toEqual({
      ...initialState,
      isError: true,
      isFetching: false,
      errorMessage: {
        error: 'test',
      },
    });
  });
});
