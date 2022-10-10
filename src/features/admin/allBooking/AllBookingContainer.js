import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as bookingApi from '../../../api/bookApi';
import AllBookingCard from './AllBookingCard';

function AllBookingContainer() {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    const fetchAllBooking = async () => {
      try {
        await getSetBooking();
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    };

    fetchAllBooking();
  }, []);

  const getSetBooking = async () => {
    const res = await bookingApi.getAllBooking();
    setAllBookings(res.data.allBookingList);
  };

  console.log(allBookings);
  return (
    <>
      <div className="flex flex-col items-center bg-gray-200">
        <div className=" mt-12 w-7/12 mb-5 text-2xl">Show all booking </div>
        {allBookings?.map((booking) => {
          return <AllBookingCard key={booking.bookingId} booking={booking} />;
        })}
        <div className="flex justify-end"></div>
      </div>
    </>
  );
}

export default AllBookingContainer;
