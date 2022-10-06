import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserContext } from '../../../contexts/UserContext';
import BookingCard from './BookingCard';
import BookingSlot from './BookingSlot';

function BookingContainer() {
  const { selectedFac, selectedTimeSlots, setSelectedTimeSlots } =
    useUserContext();
  const { durationLimit } = selectedFac;
  const navigate = useNavigate();
  const handleClick = () => {
    if (durationLimit) {
      if (selectedTimeSlots.length > durationLimit * 2) {
        toast.error(`Limit${durationLimit} hr per booking`);
      } else navigate('/booking/confirm');
    }
  };

  useEffect(() => {
    setSelectedTimeSlots([]);
  }, []);

  return (
    <>
      <BookingCard />
      <BookingSlot />
      <div className="flex justify-end">
        <button
          type="button"
          className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
          onClick={handleClick}
        >
          Select
        </button>
      </div>
    </>
  );
}

export default BookingContainer;
