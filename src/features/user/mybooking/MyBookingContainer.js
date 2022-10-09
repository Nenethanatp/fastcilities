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
  const todayObj = new Date();
  const tmrObj = new Date(todayObj);
  tmrObj.setDate(tmrObj.getDate() + 1);
  const tmr = dateFormat(tmrObj, 'yyyy-mm-dd');

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
      <div className="flex flex-col items-center w-full">
        <div className=" mt-12 w-7/12 mb-5 text-2xl">My Booking</div>
        <div className="w-full">
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
                  tmr={tmr}
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
