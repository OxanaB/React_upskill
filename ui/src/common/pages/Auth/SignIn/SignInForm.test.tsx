import React from 'react';
import { mount } from 'enzyme';
import SignInForm from './SignInForm';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureMockStore();

describe('SignInForm Component', () => {
  it('should render two inputs with submit button', () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
