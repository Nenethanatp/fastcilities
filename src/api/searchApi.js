import axios from '../config/axios';

export const getAvailableFac = async (type, bookingDate) => {
  return axios.get(`/user/search?type=${type}&bookingDate=${bookingDate}`);
};
