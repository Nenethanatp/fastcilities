import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as facApi from '../api/facApi';

const FacContext = createContext();

function FacContextProvider({ children }) {
  const [allFacs, setAllFacs] = useState([]);
  const [selectedFac, setSelectedFac] = useState({});

  const getAllFacFn = async () => {
    const res = await facApi.getAllFac();
    setAllFacs(res.data.allFacility);
  };

  return (
    <FacContext.Provider
      value={{ allFacs, setAllFacs, selectedFac, setSelectedFac, getAllFacFn }}
    >
      {children}
    </FacContext.Provider>
  );
}

export const useFacContext = () => {
  return useContext(FacContext);
};

export default FacContextProvider;
