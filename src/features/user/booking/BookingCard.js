import React from 'react';

function BookingCard() {
  return (
    <div>
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div class="flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-start items-center mb-3 px-10 h-20 mt-8">
          <img
            class=" h-20"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="flex">
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-sm">Meeting Room4</h5>
              <h5 class="text-gray-900 text-sm">
                Library at faculty of Engineering
              </h5>
            </div>

            <h5 class="text-gray-900 text-sm mb-2 ">Wed, 9 Sep 2022</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
