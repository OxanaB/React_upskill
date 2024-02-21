import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { validateRoutes } from '../utils/validateRoutes';

const headers = {
  Accept: 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers':
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
};

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers,
  withCredentials: true,
});

instance.interceptors.response.use(
  response => response,
  err => {
    if (err.message === 'Network Error') {
      toast.error('Network error', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
    if (err.response.status === 404) {
      window.location.replace('/not-found');
    }
    if (
      err.response.status === 401 &&
      validateRoutes(window.location.pathname)
    ) {
      window.location.replace('/sign-in');
    }
    return Promise.reject(err);
  },
);
