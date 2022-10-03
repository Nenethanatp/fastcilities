import { Navigate, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/auth/AuthLayout';
import SearchPage from '../pages/client/SearchPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { useAuthContext } from '../contexts/AuthContext';
function Router() {
  const { user } = useAuthContext();
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="*" element={<Navigate to="/search" />} />
        </Route>
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
