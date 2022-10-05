import React from 'react';

function ResultCard({ availableFac }) {
  const {
    name,
    location,
    openTime,
    closeTime,
    openingDay,
    capacity,
    durationLimit,
    image,
  } = availableFac;

  console.log(availableFac);
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
              <p class="text-gray-700 text-base ">{capacity} Person/room</p>
              <p class="text-gray-700 text-base ">
                Limit {durationLimit} hr/booking
              </p>
            </div>
            <button
              type="button"
              className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
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
