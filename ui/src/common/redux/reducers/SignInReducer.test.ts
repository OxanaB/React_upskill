import {
  RESET_SIGNIN,
  SIGNIN_ERROR,
  SIGNIN_LOAD,
  SIGNIN_SUCCESS,
} from '../actions/SignInActions';
import { signInReducer, SignInState } from './SignInReducer';

const initialState: SignInState = {
  isLoading: false,
  isError: false,
  isFetching: false,
  errorMessage: null,
};
describe('SignIn Reducer', () => {
  it('should return initial state', () => {
    const reducer = signInReducer(undefined, {
      type: 'Test',
      error: null,
      payload: undefined,
    });
    expect(reducer).toEqual(initialState);
  });

  it('should return reset state', () => {
    const reducer = signInReducer(initialState, {
      type: RESET_SIGNIN,
      error: null,
      payload: undefined,
    });
    expect(reducer).toEqual(initialState);
  });

  it('should transmit sign in load reducer', () => {
    const reducer = signInReducer(initialState, {
      type: SIGNIN_LOAD,
      error: null,
      payload: undefined,
    });
    expect(reducer).toEqual({ ...initialState, isLoading: true });
  });

  it('should transmit sign in success reducer', () => {
    const reducer = signInReducer(initialState, {
      type: SIGNIN_SUCCESS,
      error: null,
      payload: undefined,
    });
    expect(reducer).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      isFetching: true,
      errorMessage: null,
    });
  });

  it('should transmit sign in error reducer', () => {
    const reducer = signInReducer(initialState, {
      type: SIGNIN_ERROR,
      error: {
        error: 'Test',
      },
      payload: undefined,
    });
    expect(reducer).toEqual({
      ...initialState,
      errorMessage: {
        error: 'Test',
      },
      isError: true,
    });
  });
});
