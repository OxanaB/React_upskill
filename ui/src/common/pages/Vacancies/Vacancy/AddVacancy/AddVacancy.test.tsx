import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { AddVacancy } from './AddVacancy';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Loader } from '../../../../shared/Loader/Loader';
import { MessageNotification } from '../../../../shared/MessageNotification/MessageNotification';
const mockStore = configureMockStore();
const history = createBrowserHistory();

describe('AddVacancy Page', () => {
  it('should render form', () => {
    const store = mockStore({
      operateVacancyReducer: {
        errorMessage: null,
        isFetching: false,
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <AddVacancy />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input')).toHaveLength(5);
    expect(wrapper.find('button').text()).toEqual('Add vacancy');
  });

  it('should render loader', () => {
    const store = mockStore({
      operateVacancyReducer: {
        errorMessage: null,
        isFetching: false,
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <AddVacancy />
        </Router>
      </Provider>,
    );
    expect(wrapper.contains(<Loader />)).toBe(true);
  });
  describe('Error testing', () => {
    it('should be rendered with error', () => {
      const store = mockStore({
        operateVacancyReducer: {
          errorMessage: {
            error: 'Test error',
          },
          isFetching: true,
          isLoading: false,
        },
      });
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <AddVacancy />
          </Router>
        </Provider>,
      );
      const errorComponent = wrapper.find(MessageNotification);
      expect(errorComponent.props().error).toEqual('Test error');
    });
  });
});
