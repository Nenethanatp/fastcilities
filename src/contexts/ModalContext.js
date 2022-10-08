import { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  //openModal is object (add key= header,body)

  const openFormModal = useCallback((form) => setOpenModal(form), []);

  const closeFormModal = useCallback(() => setOpenModal(false), []);

  return (
    <ModalContext.Provider value={{ openModal, openFormModal, closeFormModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;

export const useModal = () => useContext(ModalContext);
