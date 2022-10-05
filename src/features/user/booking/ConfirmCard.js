import React from 'react';

function ConfirmCard() {
  return (
    <div className="  w-full">
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div class="flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-start items-center mb-3 px-10">
          <img
            class=" h-60"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium ">Meeting Room4</h5>
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Library at faculty of Engineering
            </h5>
            <p class="text-gray-700 text-base ">Open 10:00-19:00</p>
            <p class="text-gray-700 text-base ">Mon-Fri</p>
            <p class="text-gray-700 text-base ">8 Person/room</p>
            <p class="text-gray-700 text-base ">Limit 2 hr/booking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCard;
