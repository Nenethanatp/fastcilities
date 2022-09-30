import React from 'react';
import GeneralButton from '../../components/button/General';

function LoginForm() {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center h-[100vh] bg-gray-200">
        <form className="w-3/5 p-5 rounded-xl text-center bg-white">
          <div>Login</div>
          <div></div>
          <br />
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            ></label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            ></label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="password"
              required
            />
          </div>
          <GeneralButton
            text="Login"
            color="green"
            width="4/5"
            type="button"
          ></GeneralButton>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
