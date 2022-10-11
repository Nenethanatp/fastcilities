import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as facApi from '../api/facApi';
import { useLoadingContext } from './LoadingContext';

const FacContext = createContext();

function FacContextProvider({ children }) {
  const [allFacs, setAllFacs] = useState([]);
  const [selectedFac, setSelectedFac] = useState({});

  const { startLoading, stopLoading } = useLoadingContext();

  const getAllFacFn = async () => {
    try {
      startLoading();
      const res = await facApi.getAllFac();
      setAllFacs(res.data.allFacility);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
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
