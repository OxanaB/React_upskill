import { RouteProps } from 'react-router';

export interface ExtendedRouteProps extends RouteProps {
  keyValue: string;
  path: string;
  isAuth?: boolean;
  isEmployer?: boolean;
  list: Array<any>;
  component: () => JSX.Element;
}

export interface RenderRoutesProps extends ExtendedRouteProps {
  component: any;
}
