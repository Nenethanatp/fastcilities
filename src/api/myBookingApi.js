import axios from '../config/axios';

export const getMyBooking = async () => {
  return axios.get('/user/my_booking');
};

export const deleteMyBooking = async (bookingId) => {
  return axios.delete(`/user/my_booking/${bookingId}`);
};
