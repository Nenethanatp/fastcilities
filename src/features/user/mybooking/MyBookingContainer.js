import React from 'react';
import MybookingCard from './MybookingCard';

function MyBookingContainer() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" mt-12 ml-16 mb-5 text-xl">My Booking</div>
        <MybookingCard />

        <div className="flex justify-end">
          <button
            type="button"
            className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default MyBookingContainer;
