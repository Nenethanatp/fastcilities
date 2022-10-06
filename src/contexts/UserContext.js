import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [bookingDate, setBookingDate] = useState('');
  const [availableFacs, setAvailableFacs] = useState([]);
  const [selectedFac, setSelectedFac] = useState({});
  const [usedTimeSlots, setUsedTimeSlots] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  console.log(selectedTimeSlots);
  return (
    <UserContext.Provider
      value={{
        bookingDate,
        setBookingDate,
        availableFacs,
        setAvailableFacs,
        usedTimeSlots,
        setUsedTimeSlots,
        selectedFac,
        setSelectedFac,
        selectedTimeSlots,
        setSelectedTimeSlots,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
