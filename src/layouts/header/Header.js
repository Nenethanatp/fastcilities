import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuthContext();
  const [page, setPage] = useState('search');

  return (
    <nav className="flex items-center justify-between flex-wrap bg-grayNav p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div>logo FASTCILITIES</div>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-10">
        <div className="text-sm lg:flex-grow flex justify-end gap-3">
          <Link
            to="/search"
            className={
              page === 'search'
                ? 'text-bold text-peach block lg:inline-block lg:mt-0 mr-4 mt-4 '
                : 'block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4'
            }
            onClick={() => {
              setPage('search');
            }}
          >
            Search
          </Link>
          <Link
            to="/my_booking"
            className={
              page === 'myBooking'
                ? 'text-bold text-peach block lg:inline-block lg:mt-0 mr-4 mt-4 '
                : 'block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4'
            }
            onClick={() => {
              setPage('myBooking');
            }}
          >
            My Booking
          </Link>
          <Link
            to="/auth/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
            onClick={async () => {
              await logout();
            }}
          >
            Logout
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              src={user.image}
              alt="user img"
              className="w-[45px] h-[45px] rounded-full object-cover"
            ></img>
          </div>
          <div>
            <Link
              to="/profile"
              className={
                page === 'profile'
                  ? 'text-bold text-peach block lg:inline-block lg:mt-0 mr-4 mt-4 '
                  : 'block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4'
              }
              onClick={() => {
                setPage('profile');
              }}
            >
              {user.firstName}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
