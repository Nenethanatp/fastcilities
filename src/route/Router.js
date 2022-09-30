import { Navigate, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/auth/AuthLayout';
import LoginPage from '../pages/LoginPage';

function Router() {
  const role = 'user';
  const user = '';

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {user ? (
          <Route path="/login"></Route>
        ) : (
          <Route path="/login" element={<LoginPage />} />
        )}
      </Route>
    </Routes>
  );
}

export default Router;
