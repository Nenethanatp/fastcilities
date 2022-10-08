import axios from '../config/axios';

export const getMyBooking = () => {
  return axios.get('/user/my_booking');
};

export const deleteMyBooking = (bookingId) => {
  return axios.delete(`/user/my_booking/${bookingId}`);
};
