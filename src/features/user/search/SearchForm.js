import { useState } from 'react';
import { getAvailableFac } from '../../../api/searchApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserContext } from '../../../contexts/UserContext';
import SearchFormCard from './SearchFormCard';
import dateFormat from 'dateformat';
import badminton from '../../../assets/icon/badminton.png';
import { useAuthContext } from '../../../contexts/AuthContext';

function SearchForm() {
  const { bookingDate, setBookingDate, setAvailableFacs } = useUserContext();
  const facilityTypes = [
    {
      facName: 'Meeting Room',
      facType: 'room',
      logo: 'fa-solid fa-building-user',
    },
    {
      facName: 'Badminton Court',
      facType: 'badminton',
      logo: '',
      image: badminton,
    },
    {
      facName: 'Basketball Court',
      facType: 'basketball',
      logo: 'fa-solid fa-basketball',
    },
  ];
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const { user } = useAuthContext();

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
        user.role === 'user' ? navigate('/search/result') : navigate('/cancel');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className=" flex justify-center">
          <div className="flex w-[900px] flex-col items-center">
            <div className="flex flex-row justify-between gap-16 pt-52 mb-7">
              {facilityTypes.map((facType) => {
                return (
                  <SearchFormCard
                    facType={facType}
                    selectType={setType}
                    type={type}
                  />
                );
              })}
            </div>
            <div class="relative w-full">
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
              className={`text-white bg-greenSky hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-72 `}
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
