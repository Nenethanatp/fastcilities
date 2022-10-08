import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import { formatSlot } from '../../../utils/formatSlotTimes';
import dateFormat from 'dateformat';

function ConfirmCard() {
  const { selectedFac, bookingDate, selectedTimeSlots } = useUserContext();
  // console.log(selectedFac);
  const { name, location, image } = selectedFac;

  const bookinDateNewFormat = dateFormat(bookingDate, 'ddd, dd mmm yy');
  const slots = formatSlot(selectedTimeSlots);
  const stringSlots = slots.join(', ');
  // console.log(slots);

  return (
    <div className="  w-full">
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div class="flex flex-row  rounded-lg bg-white shadow-lg w-7/12  items-center mb-3 p-5 justify-between h-[180px] ">
          <div className="flex items-center gap-5">
            <img class=" w-60 h-36 rounded-xl" src={image} alt="" />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium ">{name}</h5>
              <h5 class="text-gray-900 text-xl font-medium mb-2">{location}</h5>
              <p class="text-gray-700 text-base ">
                Date : {bookinDateNewFormat}
              </p>
              <p class="text-gray-700 text-base ">Time : {stringSlots}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCard;
