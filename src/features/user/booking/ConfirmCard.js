import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import { formatSlot } from '../../../utils/formatSlotTimes';

function ConfirmCard() {
  const { selectedFac, bookingDate, selectedTimeSlots } = useUserContext();
  // console.log(selectedFac);
  const { name, location, image } = selectedFac;
  const slots = formatSlot(selectedTimeSlots);
  const stringSlots = slots.join(', ');
  // console.log(slots);

  return (
    <div className="  w-full">
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div class="flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-start items-center mb-3 px-10">
          <img class=" h-60" src={image} alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium ">{name}</h5>
            <h5 class="text-gray-900 text-xl font-medium mb-2">{location}</h5>
            <p class="text-gray-700 text-base ">Date : {bookingDate}</p>
            <p class="text-gray-700 text-base ">Time : {stringSlots}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCard;
