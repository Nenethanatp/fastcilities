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
import AdminLayout from '../layouts/admin/AdminLayout';
// import CancelPage from '../pages/admin/CancelPage';
import CreateEditPage from '../pages/admin/CreateEditPage';
import AllBookingPage from '../pages/admin/AllBookingPage';
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
          <Route element={<AdminLayout />}>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/all_booking" element={<AllBookingPage />} />
            <Route path="/create_edit" element={<CreateEditPage />} />
            <Route path="*" element={<Navigate to="/all_booking" />} />
          </Route>
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
