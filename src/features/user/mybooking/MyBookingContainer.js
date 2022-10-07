import React, { useEffect } from 'react';
import { getMyBooking } from '../../../api/myBookingApi';
import { useUserContext } from '../../../contexts/UserContext';
import MyBookingCard from './MyBookingCard';

function MyBookingContainer() {
  const { myBookings, setMyBookings } = useUserContext();
  useEffect(() => {
    const firstGetMyBooking = async () => {
      const res = await getMyBooking();
      const myBookingLists = res.data.myBookingList;
      setMyBookings(myBookingLists);
    };
    firstGetMyBooking();
  }, []);

  console.log(myBookings);

  return (
    <>
      <div className="flex flex-col">
        <div className=" mt-12 ml-16 mb-5 text-xl">My Booking</div>

        {myBookings.map((booking, index) => {
          return (
            <MyBookingCard
              key={index}
              bookingId={booking.id}
              bookingDate={booking.bookingDate}
              facility={booking.Facility}
              bookingPeriod={booking.bookingPeriod}
            />
          );
        })}
      </div>
    </>
  );
}

export default MyBookingContainer;
