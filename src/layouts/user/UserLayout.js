// import Container from './Container';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default UserLayout;
