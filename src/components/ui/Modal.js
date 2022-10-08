import { useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';
function Modal({ children }) {
  const { openModal, closeFormModal } = useModal();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => (document.body.style.overflow = 'unset');
  }, [openModal]);

  return (
    <>
      {openModal && (
        <div
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/80"
          tabIndex={-1}
          onClick={closeFormModal}
        >
          <div
            className="relative p-10 w-full max-w-xl h-full md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-xl shadow py-6 border border-white">
              <div className=" text-gray-700 text-xl flex">
                <h5 className="modal-title text-success mx-auto fs-2 mb-5">
                  {openModal.header}
                </h5>
                <button
                  type="button"
                  className=" absolute right-4 top-1.5 translate-middle mt-1 mr-1 "
                  onClick={closeFormModal}
                >
                  <i
                    className="fa-solid fa-xmark text-gray-800
                   text-sm"
                  ></i>
                </button>
              </div>
              <div className="w-full px-8">{openModal.body}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
