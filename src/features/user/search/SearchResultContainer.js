import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import ResultCard from './ResultCard';

function SearchResultContainer() {
  const { availableFacs } = useUserContext();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" mt-12 w-7/12 mb-5 text-2xl">Available</div>

        {availableFacs?.map((availableFac) => {
          return (
            <ResultCard key={availableFac.id} availableFac={availableFac} />
          );
        })}

        <div className="flex justify-end"></div>
      </div>
    </>
  );
}

export default SearchResultContainer;
