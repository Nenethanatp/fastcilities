import axios from '../config/axios';

export const getAvailableFac = async (type, bookingDate) => {
  return axios.get(`/user/search?type=${type}&bookingDate=${bookingDate}`);
};

export const getAvailableTime = async (facilityId, bookingDate) => {
  return axios.get(`/user/available_time`, {
    params: { facilityId, bookingDate },
  });
};
