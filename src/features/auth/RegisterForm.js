import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateUser } from '../../validations/userValidate';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

function RegisterForm() {
  const { register } = useAuthContext();
  const { startLoading, stopLoading } = useLoadingContext();
  const [input, setInput] = useState({
    studentId: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    faculty: '',
    image: '',
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const { error } = validateUser(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);
      toast.success('Success register');
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <div className="w-[100%] flex justify-center items-center  bg-gray-200">
        <form
          className="w-2/5 p-5 rounded-xl text-center bg-white"
          onSubmit={handleSubmitForm}
        >
          <div className=" text-2xl text-grayNav">Register</div>
          <br />

          <div className="mb-6">
            <input
              name="studentId"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Student ID"
              onChange={handleChangeInput}
              value={input.studentId}
            />
          </div>
          <div className="mb-6 flex justify-between gap-2">
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Password"
              onChange={handleChangeInput}
              value={input.password}
            />
            <input
              type="password"
              name="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Confirm Password"
              onChange={handleChangeInput}
              value={input.confirmPassword}
            />
          </div>
          <div className="mb-6 flex justify-between gap-2">
            <input
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="First Name"
              onChange={handleChangeInput}
              value={input.firstName}
            />
            <input
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Last Name"
              onChange={handleChangeInput}
              value={input.lastName}
            />
          </div>
          <div className="mb-6">
            <input
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Email"
              onChange={handleChangeInput}
              value={input.email}
            />
          </div>
          <div className="mb-6">
            <input
              name="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Phone"
              onChange={handleChangeInput}
              value={input.phone}
            />
          </div>
          <div className="mb-6">
            <input
              name="faculty"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Faculty"
              onChange={handleChangeInput}
              value={input.faculty}
            />
          </div>
          <button
            type="submit"
            className={`text-white bg-greenSky hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/5`}
          >
            Register
          </button>
          <div>
            <Link className=" text-gray-400 text-xs" to="/login">
              Already have an account ? Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
