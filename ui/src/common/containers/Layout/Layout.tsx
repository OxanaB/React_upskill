import React, { Suspense } from 'react';
import Header from './Header/Header';
import { Switch, useLocation } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { RouteWithSubRoutes } from './Routes';
import { routes } from '../../configs/routes.config';
import { ExtendedRouteProps } from '../../interfaces/Route';
import { MobileNav } from './Navigation/MobileNav';

import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';
import { Loader } from '../../shared/Loader/Loader';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div className="app-container">
        <Header>
          <Navigation />
        </Header>
        <Switch>
          {routes.list.map((route: ExtendedRouteProps, i: number) => (
            <Suspense fallback={<Loader init={false} />}>
              <RouteWithSubRoutes key={i + route.path} {...route} />
            </Suspense>
          ))}
        </Switch>
        <ToastContainer />
        {location.pathname !== '/' && <MobileNav />}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
