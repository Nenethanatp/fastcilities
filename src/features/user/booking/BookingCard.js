import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import dateFormat from 'dateformat';

function BookingCard() {
  const { selectedFac, bookingDate } = useUserContext();
  const { name, location, image } = selectedFac;

  const bookinDateNewFormat = dateFormat(bookingDate, 'ddd, dd mmm yy');

  return (
    <div>
      <div class="flex justify-center flex-col items-center">
        <div class="flex flex-row rounded-lg bg-white shadow-lg w-4/5  items-center my-12 p-2 h-20 justify-between ">
          <div className="flex items-center gap-2">
            <img
              class=" h-[65px] rounded-lg object-cover "
              src={image}
              alt=""
            />
            <div className="flex">
              <div class="flex flex-col justify-start">
                <h5 class="text-gray-900 text-sm">{name}</h5>
                <h5 class="text-gray-900 text-sm">{location}</h5>
              </div>
            </div>
          </div>
          <h5 class="text-gray-900 text-sm mr-4 ">{bookinDateNewFormat}</h5>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
