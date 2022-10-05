import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import ResultCard from './ResultCard';

function SearchResultContainer() {
  const { availableFacs } = useUserContext();
  return (
    <>
      <div className="flex flex-col">
        <div className=" mt-12 ml-16 mb-5 text-xl">Available Room</div>
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
