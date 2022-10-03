import axios from 'axios';
import { API_ENDPOINT_URL } from './env';
import { getAccessToken, removeAccessItem } from '../utils/localStorage';

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      removeAccessItem();
      return window.location.replace('/');
    }
    return Promise.reject(err);
  }
);

export default axios;
