import React, { useEffect } from 'react';
import { getMyBooking } from '../../../api/myBookingApi';
import { useUserContext } from '../../../contexts/UserContext';
import MyBookingCard from './MyBookingCard';
import dateFormat from 'dateformat';

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

  const today = dateFormat(new Date(), 'yyyy-mm-dd');
  console.log(today);

  const prevBooking = myBookings.filter(
    (booking) => booking.bookingDate < today
  );
  const todayBooking = myBookings.filter(
    (booking) => booking.bookingDate === today
  );
  const laterBooking = myBookings.filter(
    (booking) => booking.bookingDate > today
  );

  return (
    <>
      <div className="flex flex-col">
        <div className=" mt-12 ml-16 mb-5 text-xl">My Booking</div>
        <div>
          {todayBooking.length !== 0 &&
            todayBooking.map((booking) => {
              return (
                <MyBookingCard
                  key={booking.id}
                  bookingId={booking.id}
                  bookingDate={booking.bookingDate}
                  facility={booking.Facility}
                  bookingPeriod={booking.bookingPeriod}
                  type={'today'}
                />
              );
            })}
          {laterBooking.length !== 0 &&
            laterBooking.map((booking) => {
              return (
                <MyBookingCard
                  key={booking.id}
                  bookingId={booking.id}
                  bookingDate={booking.bookingDate}
                  facility={booking.Facility}
                  bookingPeriod={booking.bookingPeriod}
                  type={'later'}
                />
              );
            })}
          {prevBooking.length !== 0 &&
            prevBooking.map((booking) => {
              return (
                <MyBookingCard
                  key={booking.id}
                  bookingId={booking.id}
                  bookingDate={booking.bookingDate}
                  facility={booking.Facility}
                  bookingPeriod={booking.bookingPeriod}
                  type={'prev'}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MyBookingContainer;
