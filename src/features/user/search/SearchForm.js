import { useState } from 'react';
import { getAvailableFac } from '../../../api/searchApi';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useUserContext } from '../../../contexts/UserContext';
import SearchFormCard from './SearchFormCard';
import dateFormat from 'dateformat';

function SearchForm() {
  const { bookingDate, setBookingDate, setAvailableFacs } = useUserContext();
  const facilityTypes = [
    { facName: 'Meeting Room', facType: 'room', logo: 'logo1' },
    { facName: 'Badminton Court', facType: 'badminton', logo: 'logo2' },
    { facName: 'Basketball Court', facType: 'basketball', logo: 'logo3' },
  ];
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const today = dateFormat(new Date(), 'yyyy-mm-dd');
  // console.log(today);

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
              {facilityTypes.map((facType) => {
                return (
                  <SearchFormCard facType={facType} selectType={setType} />
                );
              })}
            </div>
            <div class="relative ">
              <input
                type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 mb-7 "
                min={today}
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
