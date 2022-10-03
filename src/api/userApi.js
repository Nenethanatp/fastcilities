import axios from '../config/axios';

export const getUser = () => {
  return axios.get('/user');
};
