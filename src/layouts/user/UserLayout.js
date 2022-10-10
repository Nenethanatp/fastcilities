// import Container from './Container';
import { Outlet } from 'react-router-dom';
import UserHeader from '../header/UserHeader';

function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}

export default UserLayout;
