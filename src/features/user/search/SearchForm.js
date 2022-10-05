import { useState } from 'react';
import { getAvailableFac } from '../../../api/searchApi';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useUserContext } from '../../../contexts/UserContext';

function SearchForm() {
  const { bookingDate, setBookingDate, setAvailableFacs } = useUserContext();

  const navigate = useNavigate();
  const [type, setType] = useState('');

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (!type || !bookingDate) {
        return toast.error('Please select type and booking date');
      }
      const res = await getAvailableFac(type, bookingDate);

      if (res.data.facility) {
        setAvailableFacs(res.data.facility);
        navigate('/search/result');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className=" flex justify-center">
          <div className="w-8/12 flex-col ">
            <div className="flex flex-row justify-between gap-16 pt-52 mb-7">
              <div
                className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-64 w-64 flex-row"
                name="room"
                onClick={() => setType('room')}
              >
                <div className="flex flex-col items-center pb-10">
                  <div>img</div>
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    Meeting Room{' '}
                  </h5>
                </div>
              </div>
              <div
                className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-64 w-64 flex-row"
                name="badminton"
                onClick={() => setType('badminton')}
              >
                <div className="flex flex-col items-center pb-10">
                  <div>img</div>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Badminton Court
                  </h5>
                </div>
              </div>
              <div
                className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-64 w-64 flex-row"
                name="basketball"
                onClick={() => setType('basketball')}
              >
                <div className="flex flex-col items-center pb-10">
                  <div>img</div>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Basketball Court
                  </h5>
                </div>
              </div>
            </div>
            <div class="relative ">
              <input
                type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-7 "
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className={`text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-72 `}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
