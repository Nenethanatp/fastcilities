import Router from './route/Router';
import { ToastContainer } from 'react-toastify';
import Spinner from './components/ui/Spinner';
import { useAuthContext } from './contexts/AuthContext';
import { useLoadingContext } from './contexts/LoadingContext';

function App() {
  const { initialLoading } = useAuthContext();
  const { loading } = useLoadingContext();

  console.log(initialLoading);
  if (initialLoading) {
    return <Spinner />;
  }
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="2500"
        theme="colored"
        position="bottom-right"
      />
    </>
  );
}

export default App;
