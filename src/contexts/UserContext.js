import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [bookingDate, setBookingDate] = useState('');
  const [availableFacs, setAvailableFacs] = useState([]);
  console.log(availableFacs);
  return (
    <UserContext.Provider
      value={{ bookingDate, setBookingDate, availableFacs, setAvailableFacs }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
