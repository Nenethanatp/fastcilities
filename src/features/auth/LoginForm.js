import React, { useState } from 'react';
import GeneralButton from '../../components/button/General';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../contexts/AuthContext';

function LoginForm() {
  const { login } = useAuthContext();
  const [input, setInput] = useState({
    studentId: '',
    password: '',
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      await login(input);
      toast.success('Success Login');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="w-[100%] flex justify-center items-center h-[100vh] bg-gray-200">
        <form
          className="w-2/5 p-5 rounded-xl text-center bg-white"
          onSubmit={handleSubmitForm}
        >
          <div>Login</div>
          <br />
          <div className="mb-6">
            <input
              name="studentId"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Student ID / Admin ID"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Password"
              onChange={handleChangeInput}
            />
          </div>
          {/* <GeneralButton
            text="Login"
            color="red"
            width="3/5"
            type="submit"
          ></GeneralButton> */}
          <button
            type="submit"
            className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/5`}
          >
            Login
          </button>

          <div>
            <Link className=" text-gray-400 text-xs" to="/register">
              {' '}
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
