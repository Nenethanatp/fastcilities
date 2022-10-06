import axios from '../config/axios';

export const getMyBooking = async () => {
  return axios.get('/user/my_booking');
};
