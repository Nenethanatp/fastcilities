import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAvailableTime } from '../../../api/searchApi';
import { useUserContext } from '../../../contexts/UserContext';

function AllBookingCard({ booking }) {
  const { Facility, User, bookingTimeSlot, bookingId, bookingDate } = booking;
  const {
    name: facName,
    location: facLocation,
    image: facImage,
    id: facId,
  } = Facility;
  const { studentId, firstName, lastName } = User;

  const joinedBookingTimeSlot = bookingTimeSlot.join(', ');

  return (
    <>
      <div className="  w-full">
        <div class="flex justify-center flex-col items-center gap-4 ">
          <div class="flex flex-row  rounded-lg bg-white shadow-lg w-7/12  items-center mb-3 justify-between h-[180px] ">
            <div className="flex items-center gap-5 p-5">
              <img
                class=" w-60 h-36 object-cover rounded-lg"
                src={facImage}
                alt=""
              />
              <div className="flex ">
                <div class="flex flex-col justify-start">
                  <h5 class="text-gray-900 text-lg font-medium ">{facName}</h5>
                  <h5 class="text-gray-900 text-lg font-medium mb-2">
                    {facLocation}
                  </h5>
                  <p class="text-gray-700 text-base ">
                    Booking Date: {bookingDate}
                  </p>

                  <p class="text-gray-700 text-base ">
                    Booking Period: {joinedBookingTimeSlot}
                  </p>
                </div>
              </div>
            </div>
            {/* <button
              type="button"
              className={`text-white bg-greenSky hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
            >
              Show Available
            </button> */}
            <div className="p-5 w-[300px] bg-yellow- h-full bg-grayNav flex flex-col justify-center text-white text-base rounded-r-lg opacity-60">
              <p class=" ">Booking id: {bookingId}</p>
              <p class=" ">Booked by: {`${firstName} ${lastName}`}</p>
              <p class=" ">User id: {studentId}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBookingCard;
