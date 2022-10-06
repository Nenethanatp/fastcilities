import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAvailableTime } from '../../../api/searchApi';
import { useUserContext } from '../../../contexts/UserContext';

function ResultCard({ availableFac }) {
  const {
    id,
    name,
    location,
    openTime,
    closeTime,
    openingDay,
    capacity,
    durationLimit,
    image,
  } = availableFac;

  const navigate = useNavigate();

  const { setSelectedFac } = useUserContext();

  const { bookingDate, setUsedTimeSlots } = useUserContext();
  const handleClick = async () => {
    try {
      const res = await getAvailableTime(id, bookingDate);
      setUsedTimeSlots(res.data.usedTimeSlots);
      setSelectedFac(availableFac);

      navigate('/booking');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="  w-full">
        <div class="flex justify-center flex-col items-center gap-4 ">
          <div class="flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-between items-center mb-3 px-10">
            <img class=" h-60" src={image} alt="" />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium ">{name}</h5>
              <h5 class="text-gray-900 text-xl font-medium mb-2">{location}</h5>
              <p class="text-gray-700 text-base ">
                Open {openTime}-{closeTime}
              </p>
              <p class="text-gray-700 text-base ">{openingDay}</p>
              {capacity && (
                <p class="text-gray-700 text-base ">{capacity} Person/room</p>
              )}

              <p class="text-gray-700 text-base ">
                {`Limit ${durationLimit} hr/booking`}
              </p>
            </div>
            <button
              type="button"
              className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
              onClick={handleClick}
            >
              Show Available
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCard;
