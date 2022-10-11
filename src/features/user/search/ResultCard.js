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
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <div className="  w-full">
        <div className="flex justify-center flex-col items-center gap-4 ">
          <div className="flex flex-row  rounded-lg bg-white shadow-lg w-7/12  items-center mb-3 p-5 justify-between h-[180px] ">
            <div className="flex items-center gap-5">
              <img
                className=" w-60 h-36 object-cover rounded-xl"
                src={image}
                alt=""
              />
              <div className="flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium ">{name}</h5>
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {location}
                </h5>
                <p className="text-gray-700 text-base ">
                  Open {openTime}-{closeTime}
                </p>
                <p className="text-gray-700 text-base ">{openingDay}</p>
                {capacity && (
                  <p className="text-gray-700 text-base ">
                    {capacity} Person/room
                  </p>
                )}

                <p className="text-gray-700 text-base ">
                  {`Limit ${durationLimit} hr/booking`}
                </p>
              </div>{' '}
            </div>
            <button
              type="button"
              className={`text-white bg-greenSky hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
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
