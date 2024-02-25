import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ExtendedRouteProps, RenderRoutesProps } from '../../interfaces/Route';
import { getProfileSelector } from '../../redux/selectors/profileSelector';
import { isStandardRoutes } from '../../utils/validateRoutes';

export const RouteWithSubRoutes = (route: RenderRoutesProps) => {
  const { me } = useSelector(getProfileSelector);

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props =>
        (me && isStandardRoutes(route.path)) ||
        (me?.role === 'Applicant' && route.isEmployer) ? (
          <Redirect to="/dashboard" />
        ) : !me && route.isAuth && route.path !== '/' ? (
          <Redirect to="/sign-in" />
        ) : (
          <>
            <route.component {...props} routes={route.list} />
          </>
        )
      }
    />
  );
};

export const RenderRoutes = ({ list }: RenderRoutesProps) => {
  return (
    <Switch>
      {list.map((route: ExtendedRouteProps, i: number) => {
        return <RouteWithSubRoutes key={i + route.keyValue} {...route} />;
      })}
    </Switch>
  );
};
