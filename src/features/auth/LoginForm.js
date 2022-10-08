import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

function LoginForm() {
  const { login } = useAuthContext();
  const { startLoading, stopLoading } = useLoadingContext();
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
      startLoading();
      await login(input);
      toast.success('Success Login');
    } catch (err) {
      // console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
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
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Student ID / Admin ID"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Password"
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="submit"
            className={`text-white bg-greenSky hover:bg-OldGreenSky font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/5`}
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
