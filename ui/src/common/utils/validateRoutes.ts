import { routes } from '../configs/routes.config';

export const validateRoutes = (location: string) =>
  routes.list.some(
    route => location !== '/' && location === route.path && route.isAuth,
  );

export const isStandardRoutes = (location: string) =>
  location === '/' || location === '/sign-in' || location === '/sign-up';
