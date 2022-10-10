import axios from 'axios';

export const getAllFac = () => {
  return axios.get('/admin/all_facility');
};

export const createNewFac = (input) => {
  return axios.post('/admin/new_fac', input);
};

export const getFac = (id) => {
  return axios.get(`/admin/fac/${id}`);
};

export const updateFac = (id, input) => {
  return axios.patch(`admin/fac/${id}`, input);
};
