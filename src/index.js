import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import UserContextProvider from './contexts/UserContext';
import LoadingContextProvider from './contexts/LoadingContext';
import ModalContextProvider from './contexts/ModalContext';
import FacContextProvider from './contexts/FacContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoadingContextProvider>
      <ModalContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <FacContextProvider>
              <App />
            </FacContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </ModalContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
