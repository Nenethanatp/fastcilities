import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isMobilePhone } from 'validator';
import { checkPassword } from '../../../api/userApi';
import { useAuthContext } from '../../../contexts/AuthContext';
import ProfileImageForm from './ProfileImageForm';

function ProfileForm() {
  const { user, updateProfile } = useAuthContext();
  const { firstName, lastName, studentId, image } = user;
  const updated = {};

  // console.log(updated);
  const [input, setInput] = useState({});

  const navigate = useNavigate();

  const handleClickCancel = () => {
    navigate('/search');
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // console.log(input);
  // console.log(user);

  const handleSubmit = async () => {
    try {
      if (input.oldPassword && input.newPassword && input.confirmPassword) {
        if (input.newPassword !== input.confirmPassword) {
          return toast.error('Confirm password not match new password');
        }
        await checkPassword(input.oldPassword);
        updated.password = input.newPassword;
      } else if (
        input.oldPassword ||
        input.newPassword ||
        input.confirmPassword
      ) {
        return toast.error(
          'Change password must have old password, new pasword and confirm password'
        );
      }

      if (input.email) {
        if (!isEmail(input.email)) {
          return toast.error('Invalid email format');
        }

        updated.email = input.email;
      }
      if (input.phone) {
        if (!isMobilePhone(input.phone, 'th-TH')) {
          return toast.error('Invalid phone format');
        }
        updated.phone = input.phone;
      }
      if (Object.keys(updated).length === 0) {
        return toast.error('Nothing to update');
      }

      const formData = new FormData();
      Object.keys(updated).forEach((key) => {
        formData.append(key, updated[key]);
      });

      await updateProfile(formData);
      toast.success('Update profile success');
      navigate('/search');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className=" w-full bg-gray-200 ">
      <div className="flex flex-col items-center p-16">
        <ProfileImageForm updated={updated} />

        <div>{`${firstName} ${lastName}`}</div>
        <div>{studentId}</div>
      </div>
      <div className="flex flex-col items-center">
        <form className=" w-5/6 ">
          <div class="mb-3 flex flex-col ">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              id="oldPassword"
              type="Password"
              name="oldPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              onChange={handleChangeInput}
            />
          </div>

          <div className="mb-3 flex justify-between gap-2">
            <div className=" w-full">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                onChange={handleChangeInput}
              />
            </div>
            <div className=" w-full">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder={user.email}
              onChange={handleChangeInput}
            />
          </div>
          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="Phone"
            >
              Phone
            </label>
            <input
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder={user.phone}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={`text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
              onClick={handleClickCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
              onClick={handleSubmit}
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
