import axios from '../config/axios';

export const register = (input) => {
  return axios.post('/auth/register', input);
};

export const login = (input) => {
  return axios.post('/auth/login', input);
};
