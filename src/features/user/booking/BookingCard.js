import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';

function BookingCard() {
  const { selectedFac, bookingDate } = useUserContext();
  const { name, location, image } = selectedFac;
  return (
    <div>
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div class="flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-start items-center mb-3 px-10 h-20 mt-8">
          <img class=" h-20" src={image} alt="" />
          <div className="flex">
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-sm">{name}</h5>
              <h5 class="text-gray-900 text-sm">{location}</h5>
            </div>

            <h5 class="text-gray-900 text-sm mb-2 ">{bookingDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
