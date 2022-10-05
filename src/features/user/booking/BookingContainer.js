import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingCard from './BookingCard';
import BookingSlot from './BookingSlot';

function BookingContainer() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/booking/confirm');
  };

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
