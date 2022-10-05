import React from 'react';

function ProfileForm() {
  return (
    <div className=" w-full bg-gray-200 ">
      <div className="flex flex-col items-center p-16">
        <div>
          <div class="flex justify-center items-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div>Thanatporn Lawsirirattana</div>
        <div>6030261021</div>
      </div>
      <div className="flex flex-col items-center">
        <form className=" w-5/6 ">
          <div class="mb-6 flex flex-col items-center">
            <input
              type="Password"
              name="oldPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Old Password"
              //   onChange={handleChangeInput}
              //   value={input.firstName}
            />
          </div>
          <div className="mb-6 flex justify-between gap-2">
            <input
              name="newPassword"
              type="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="New Password"
              //   onChange={handleChangeInput}
              //   value={input.firstName}
            />
            <input
              name="confirmPassword"
              type="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Confirm Password"
              //   onChange={handleChangeInput}
              //   value={input.lastName}
            />
          </div>
          <div class="mb-6">
            <input
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Email"
              //   onChange={handleChangeInput}
              //   value={input.firstName}
            />
          </div>
          <div class="mb-6">
            <input
              name="Phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Phone"
              //   onChange={handleChangeInput}
              //   value={input.firstName}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={`text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
