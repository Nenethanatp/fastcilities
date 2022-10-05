import React from 'react';

function MybookingCard() {
  return (
    <div className="  w-full">
      <div class="flex justify-center flex-col items-center gap-4 ">
        <div class="flex flex-row  rounded-lg bg-white shadow-lg w-8/12 justify-between items-center mb-3 px-10">
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
            <p class="text-gray-700 text-base ">Date : Fri, 24 Apr 2022</p>
            <p class="text-gray-700 text-base ">
              Time : 17:00-18:00, 19:00-19:30{' '}
            </p>
          </div>
          <button
            type="button"
            className={`text-white bg-red-400  hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default MybookingCard;
