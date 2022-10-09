import { Navigate, Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/user/UserLayout';
import SearchPage from '../pages/client/SearchPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { useAuthContext } from '../contexts/AuthContext';
import SearchResultPage from '../pages/client/SearchResultPage';
import BookingPage from '../pages/client/BookingPage';
import ConfirmBookingPage from '../pages/client/ConfirmBookingPage';
import MyBookingPage from '../pages/client/MyBookingPage';
import ProfilePage from '../pages/client/ProfilePage';
function Router() {
  const { user } = useAuthContext();
  return (
    <Routes>
      {user ? (
        user.role !== 'admin' ? (
          <Route element={<UserLayout />}>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/result" element={<SearchResultPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/booking/confirm" element={<ConfirmBookingPage />} />
            <Route path="/my_booking" element={<MyBookingPage />} />
            <Route path="*" element={<Navigate to="/search" />} />
          </Route>
        ) : (
          ''

          // <Route element={<AdminLayout />}></Route>
        )
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
