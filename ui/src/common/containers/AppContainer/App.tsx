import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store/store';
import InitApp from '../InitApp/InitApp';
import Layout from '../Layout/Layout';

const AppContainer = () => {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Provider store={store}>
            <InitApp>
              <Layout />
            </InitApp>
          </Provider>
        </BrowserRouter>
      </>
    </div>
  );
};

export default AppContainer;
