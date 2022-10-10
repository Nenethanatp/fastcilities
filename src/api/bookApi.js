import axios from '../config/axios';

export const createBooking = async (
  facilityId,
  bookingDate,
  bookingTimeSlot
) => {
  return axios.post('/user/booking', {
    facilityId,
    bookingDate,
    bookingTimeSlot,
  });
};

export const getAllBooking = () => {
  return axios.get('/admin/all_booking');
};
