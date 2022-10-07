import axios from '../config/axios';

export const getUser = () => {
  return axios.get('/user');
};

export const checkPassword = (oldPassword) => {
  return axios.post('/user/check', { oldPassword });
};

export const updateUser = (profile) => {
  return axios.patch('/user', profile);
};
