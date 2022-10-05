import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuthContext();

  // console.log(user.firstName);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      {/* LOGO BELOW */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div>logo FASTCILITIES</div>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/search"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Search
          </Link>
          <Link
            to="/my_booking"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            My Booking
          </Link>
          <Link
            to="/auth/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            onClick={logout}
          >
            Logout
          </Link>
        </div>
        <div>
          <Link
            to="/profile"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            {user.firstName}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
