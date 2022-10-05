import React from 'react';
import BookingCard from './BookingCard';
import BookingSlot from './BookingSlot';

function BookingContainer() {
  return (
    <>
      <BookingCard />
      <BookingSlot />
      <div className="flex justify-end">
        <button
          type="button"
          className={`text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
        >
          Back
        </button>
        <button
          type="button"
          className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
        >
          Select
        </button>
      </div>
    </>
  );
}

export default BookingContainer;
