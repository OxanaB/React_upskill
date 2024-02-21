import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SignIn from './SignIn';
import { MessageNotification } from '../../../shared/MessageNotification/MessageNotification';
import SignInForm from '../../../components/AuthForms/SignInForm/SignInForm';
import { Loader } from '../../../shared/Loader/Loader';
const mockStore = configureMockStore();

describe('SignIn Page', () => {
  it('should render sign in form', () => {
    const store = mockStore({
      signInReducer: {
        errorMessage: null,
      },
      signUpReducer: {
        isFetching: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );
    expect(wrapper.contains(<SignInForm />)).toBe(true);
  });
  it('should render loading', () => {
    const store = mockStore({
      signInReducer: {
        isLoading: true,
      },
      signUpReducer: {
        isFetching: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );
    expect(wrapper.contains(<Loader />)).toBe(true);
  });
  describe('Error testing', () => {
    it('should be rendered with error', () => {
      const store = mockStore({
        signInReducer: {
          errorMessage: {
            error: 'Test error',
          },
        },
        signUpReducer: {
          isFetching: false,
        },
      });
      const wrapper = mount(
        <Provider store={store}>
          <SignIn />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
      const errorComponent = wrapper.find(MessageNotification);
      expect(errorComponent.props().error).toEqual('Test error');
    });
    it('should be rendered with success message', () => {
      const store = mockStore({
        signInReducer: {
          errorMessage: null,
        },
        signUpReducer: {
          isFetching: true,
        },
      });
      const wrapper = mount(
        <Provider store={store}>
          <SignIn />
        </Provider>,
      );
      const successComponent = wrapper.find(MessageNotification);
      expect(successComponent.props().success).toEqual(
        'An account was successfully registered',
      );
    });
  });
});
