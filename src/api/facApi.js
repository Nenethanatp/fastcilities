import axios from 'axios';

export const getAllFac = () => {
  return axios.get('/admin/all_facility');
};

export const createNewFac = (input) => {
  return axios.post('/admin/new_fac', input);
};
