import React, { useEffect } from 'react';
import { useFacContext } from '../../../contexts/FacContext';
import { useModal } from '../../../contexts/ModalContext';
import CreateFacForm from './create/CreateFacForm';
import EditFacCard from './EditFacCard';

function CreateEditContainer() {
  const { getAllFacFn, allFacs } = useFacContext();
  const { openFormModal } = useModal();

  useEffect(() => {
    getAllFacFn();
  }, []);

  const handleClick = () => {
    openFormModal({
      header: 'Create',
      body: (
        <div className=" h-4/5 justify-start">
          <CreateFacForm />
        </div>
      ),
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between mt-12 w-7/12 mb-5">
          <div className="  text-2xl">Create/Edit</div>
          <button
            type="button"
            className={`text-white bg-greenSky hover:bg-oldGreenSky font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
            onClick={handleClick}
          >
            Create
          </button>
        </div>

        {allFacs?.map((fac) => {
          if (fac) {
            return <EditFacCard key={fac.id} fac={fac} />;
          } else {
            return null;
          }
        })}

        <div className="flex justify-end"></div>
      </div>
    </>
  );
}

export default CreateEditContainer;
