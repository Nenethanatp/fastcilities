import Container from './Container';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default AuthLayout;
